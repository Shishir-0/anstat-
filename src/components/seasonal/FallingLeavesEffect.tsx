/**
 * ANSTAT Seasonal Falling Leaves Experience
 * 
 * Elegant, cinematic, and atmospheric falling leaves animation tailored
 * to ANSTAT's premium white-and-green brand aesthetic.
 * 
 * Seasonal Rule:
 * Automatically activates only during September, October, and November
 * (JS zero-indexed months: 8, 9, 10).
 * 
 * Testing Override:
 * Pass `?seasonalPreview=autumn` in the URL to preview the animation
 * outside autumn months.
 * 
 * Accessibility:
 * Strictly respects `prefers-reduced-motion: reduce`.
 * When enabled, the canvas is unmounted and no continuous animation runs.
 */

import React, { useEffect, useState, useMemo } from 'react';
import { FallingLeaves } from 'falling-leaves/react';
import type { LeafShape } from 'falling-leaves';
import {
  ANSTAT_AUTUMN_PALETTE,
  ANSTAT_LEAF_SHAPES,
  isAutumnSeason,
  shouldActivateFallingLeaves
} from './seasonalUtils.js';

export {
  ANSTAT_AUTUMN_PALETTE,
  ANSTAT_LEAF_SHAPES,
  isAutumnSeason,
  shouldActivateFallingLeaves
};

export interface FallingLeavesEffectProps {
  forceActive?: boolean;
}

export const FallingLeavesEffect: React.FC<FallingLeavesEffectProps> = ({ forceActive = false }) => {
  // 1. Seasonal activation check
  const [isActive, setIsActive] = useState(() => {
    if (forceActive) return true;
    return shouldActivateFallingLeaves();
  });

  // 2. Accessibility: prefers-reduced-motion check
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // 3. Responsive screen size check (Mobile < 768px vs Desktop)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  // 4. Tab visibility state for performance optimization
  const [isTabVisible, setIsTabVisible] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.visibilityState !== 'hidden';
  });

  // Seasonal & query-param listener
  useEffect(() => {
    if (forceActive) {
      setIsActive(true);
      return;
    }
    const checkActivation = () => {
      setIsActive(shouldActivateFallingLeaves());
    };
    checkActivation();

    // Listen to history / popstate if query changes
    window.addEventListener('popstate', checkActivation);
    return () => window.removeEventListener('popstate', checkActivation);
  }, [forceActive]);

  // Reduced motion listener
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener?.('change', handleMotionChange);
    return () => mediaQuery.removeEventListener?.('change', handleMotionChange);
  }, []);

  // Responsive resize listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Visibility change listener (pause/resume when tab is backgrounded)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState !== 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Compute tuned parameters according to screen size
  const config = useMemo(() => {
    if (isMobile) {
      return {
        count: 8,                    // Mobile: 6–10 leaves
        size: [11, 20] as [number, number], // Smaller leaf sizes
        speed: [0.35, 0.8] as [number, number], // Reduced animation intensity
        wind: [-0.15, 0.35] as [number, number],
        sway: [0.3, 0.9] as [number, number],
        rotationSpeed: [-0.9, 0.9] as [number, number],
        opacity: 0.30                // Restrained atmospheric opacity
      };
    }
    return {
      count: 18,                   // Desktop: 15–20 leaves
      size: [14, 28] as [number, number], // Desktop leaf sizes
      speed: [0.45, 1.1] as [number, number], // Low-to-moderate falling speed
      wind: [-0.2, 0.5] as [number, number],  // Subtle wind variation
      sway: [0.4, 1.2] as [number, number],   // Gentle swaying
      rotationSpeed: [-1.2, 1.2] as [number, number],
      opacity: 0.35                // Approximately 0.25–0.45
    };
  }, [isMobile]);

  // If outside seasonal months, reduced-motion requested, or tab hidden -> do not render
  if (!isActive || prefersReducedMotion || !isTabVisible) {
    return null;
  }

  return (
    <div
      data-testid="anstat-falling-leaves-container"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 20 }}
      aria-hidden="true"
    >
      <FallingLeaves
        fullScreen
        count={config.count}
        size={config.size}
        speed={config.speed}
        wind={config.wind}
        sway={config.sway}
        rotationSpeed={config.rotationSpeed}
        opacity={config.opacity}
        colors={ANSTAT_AUTUMN_PALETTE}
        shapes={ANSTAT_LEAF_SHAPES}
        respectReducedMotion={true}
        zIndex={20}
      />
    </div>
  );
};

export default FallingLeavesEffect;
