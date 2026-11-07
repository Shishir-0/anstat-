/**
 * ANSTAT Seasonal Leaves Logic & Palette Configuration
 */

export const ANSTAT_AUTUMN_PALETTE = [
  '#C89D3C', // Warm muted gold
  '#5E7143', // Olive green
  '#B87333', // Copper
  '#16804A', // Deep natural green (ANSTAT primary emerald)
  '#7A4B26', // Soft autumn brown
  '#18372A', // Deep forest green (ANSTAT brand anchor)
  '#A0522D', // Subtle warm sienna
];

export const ANSTAT_LEAF_SHAPES = ['maple', 'oak', 'ginkgo', 'birch', 'oval'];

/**
 * Check whether a given date falls within the seasonal autumn window (Sep-Nov).
 * Months in JavaScript Date are 0-indexed:
 * September = 8, October = 9, November = 10.
 */
export function isAutumnSeason(date = new Date()) {
  const month = date.getMonth();
  return month >= 8 && month <= 10;
}

/**
 * Determines whether falling leaves should be rendered.
 * Allows temporary preview via `?seasonalPreview=autumn`.
 */
export function shouldActivateFallingLeaves(searchQuery = '', date = new Date()) {
  if (typeof window !== 'undefined') {
    const query = searchQuery || window.location.search || '';
    const params = new URLSearchParams(query);
    if (params.get('seasonalPreview') === 'autumn') {
      return true;
    }
  } else if (searchQuery) {
    const params = new URLSearchParams(searchQuery);
    if (params.get('seasonalPreview') === 'autumn') {
      return true;
    }
  }
  return isAutumnSeason(date);
}

