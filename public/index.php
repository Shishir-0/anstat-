<?php
/**
 * ANSTAT Master Entry Point & Content Negotiation Controller
 * Implements RFC 7231 / RFC 9110 content negotiation for the root domain.
 * 
 * Supports both HTML and Markdown representations:
 * - Accept: text/html -> Returns HTML (text/html; charset=utf-8)
 * - Accept: text/markdown -> Returns Markdown (text/markdown; charset=utf-8)
 * - Accept: text/markdown, text/html;q=0.9 -> Returns Markdown (respects quality weighting)
 * - Accept: text/markdown;q=0, text/html -> Returns HTML (respects q=0 rejection)
 */

$_GET['route'] = $_GET['route'] ?? '';
require_once __DIR__ . '/negotiation.php';

