<?php
/**
 * ANSTAT MCP Server Card Canonical Discovery Endpoint
 * Spec: SEP-2127 / Model Context Protocol Server Card
 * Canonical URL: https://anstat.co.in/api/mcp/server-card
 */

// Handle preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, HEAD, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit;
}

$cardPath = __DIR__ . '/modern-server-card.json';
if (!file_exists($cardPath)) {
    $cardPath = __DIR__ . '/../.well-known/mcp/server-card.json';
}
if (!file_exists($cardPath)) {
    http_response_code(404);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Server card not found'], JSON_UNESCAPED_SLASHES);
    exit;
}

$cardContent = file_get_contents($cardPath);
$etag = md5($cardContent);

// Caching, discovery and validation headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, HEAD, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Cache-Control: public, max-age=3600, must-revalidate');
header('ETag: "' . $etag . '"');
header('X-Content-Type-Options: nosniff');
header('Link: <https://anstat.co.in/api/mcp>; rel="service"');
header('Link: <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="alternate"; type="application/json"');
header('Link: <https://anstat.co.in/.well-known/ai-catalog.json>; rel="describedby"');

// ETag conditional check
$ifNoneMatch = isset($_SERVER['HTTP_IF_NONE_MATCH']) ? trim($_SERVER['HTTP_IF_NONE_MATCH'], '"') : '';
if ($ifNoneMatch === $etag) {
    http_response_code(304);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'HEAD') {
    header('Content-Length: ' . strlen($cardContent));
    exit;
}

echo $cardContent;

