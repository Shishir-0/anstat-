<?php
/**
 * ANSTAT Master HTTP Content Negotiation & Variant Delivery Engine
 * Spec: RFC 7231 / RFC 9110 (Accept header quality factors & media type negotiation)
 * 
 * Supports both HTML and Markdown representations across canonical routes:
 * - Accept: text/html -> Returns HTML (text/html; charset=utf-8)
 * - Accept: text/markdown -> Returns Markdown (text/markdown; charset=utf-8)
 * - Accept: text/markdown, text/html;q=0.9 -> Returns Markdown (respects quality factor)
 * - Accept: text/markdown;q=0, text/html -> Returns HTML (respects q=0 rejection)
 */

// 1. RFC 7231 / 9110 Quality Factor Parser
function anstat_prefers_markdown($acceptHeader) {
    if (empty($acceptHeader) || !is_string($acceptHeader)) {
        return false;
    }
    
    $markdownScore = 0.0;
    $htmlScore = 0.0;
    
    $parts = explode(',', $acceptHeader);
    foreach ($parts as $part) {
        $part = trim($part);
        if ($part === '') continue;
        
        $tokens = explode(';', $part);
        $mime = strtolower(trim($tokens[0]));
        $q = 1.0;
        
        for ($i = 1; $i < count($tokens); $i++) {
            $param = strtolower(trim($tokens[$i]));
            if (strpos($param, 'q=') === 0) {
                $val = floatval(trim(substr($param, 2)));
                if (!is_nan($val)) {
                    $q = max(0.0, min(1.0, $val));
                }
            }
        }
        
        if ($mime === 'text/markdown' || $mime === 'text/x-markdown') {
            if ($q > $markdownScore) {
                $markdownScore = $q;
            }
        } elseif ($mime === 'text/html' || $mime === 'application/xhtml+xml') {
            if ($q > $htmlScore) {
                $htmlScore = $q;
            }
        }
    }
    
    // Markdown is chosen only if explicitly requested with q > 0 and weight is >= html
    return ($markdownScore > 0.0 && $markdownScore >= $htmlScore);
}

// 2. Identify requested route
$route = $_GET['route'] ?? '';
$route = trim(parse_url($route, PHP_URL_PATH) ?? '', '/');
if (empty($route) || $route === 'index' || $route === 'index.html' || $route === 'index.php') {
    $route = '';
}

$accept = $_SERVER['HTTP_ACCEPT'] ?? '';
$wantsMarkdown = anstat_prefers_markdown($accept);

// Canonical Host & Alternate Link Definitions
$canonicalPath = empty($route) ? '/' : '/' . $route;
$mdRelativePath = empty($route) ? 'index.md' : $route . '.md';
$mdFilePath = __DIR__ . '/markdown/' . $mdRelativePath;

// Handle nested paths (e.g. research/ai-startup-architecture)
if (!file_exists($mdFilePath) && !empty($route)) {
    $nestedPath = __DIR__ . '/markdown/' . $route . '/index.md';
    if (file_exists($nestedPath)) {
        $mdFilePath = $nestedPath;
    }
}

// 3. Serve Markdown if preferred and available
if ($wantsMarkdown && file_exists($mdFilePath)) {
    $mdContent = file_get_contents($mdFilePath);
    $etag = md5($mdContent);
    
    header('Content-Type: text/markdown; charset=utf-8');
    header('Vary: Accept, Accept-Encoding');
    header('Cache-Control: public, max-age=3600, must-revalidate');
    header('ETag: "' . $etag . '"');
    header('Link: <https://anstat.co.in' . $canonicalPath . '>; rel="canonical"');
    header('Link: <https://anstat.co.in/markdown/' . $mdRelativePath . '>; rel="alternate"; type="text/markdown"');
    header('Link: <https://anstat.co.in/llms.txt>; rel="describedby"');
    header('Link: <https://anstat.co.in/api/mcp/server-card>; rel="service-desc"');
    header('Link: <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="service-desc"');
    header('Content-Signal: search=yes, ai-input=yes, ai-train=no');
    header('X-Content-Signal: search=yes, ai-input=yes, ai-train=no');
    
    // ETag 304 handling
    $ifNoneMatch = isset($_SERVER['HTTP_IF_NONE_MATCH']) ? trim($_SERVER['HTTP_IF_NONE_MATCH'], '"') : '';
    if ($ifNoneMatch === $etag) {
        http_response_code(304);
        exit;
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'HEAD') {
        header('Content-Length: ' . strlen($mdContent));
        exit;
    }
    
    echo $mdContent;
    exit;
}

// 4. Serve HTML Representation (Default for browsers, general crawlers, and HTML preference)
$htmlFilePath = empty($route) ? __DIR__ . '/index.html' : __DIR__ . '/' . $route . '/index.html';
if (!file_exists($htmlFilePath) && !empty($route)) {
    $altHtml = __DIR__ . '/' . $route . '.html';
    if (file_exists($altHtml)) {
        $htmlFilePath = $altHtml;
    } else {
        $htmlFilePath = __DIR__ . '/index.html'; // SPA fallback
    }
}

if (file_exists($htmlFilePath)) {
    $htmlContent = file_get_contents($htmlFilePath);
    $etag = md5($htmlContent);
    
    header('Content-Type: text/html; charset=utf-8');
    header('Vary: Accept, Accept-Encoding');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('ETag: "' . $etag . '"');
    header('Link: <https://anstat.co.in/markdown/' . $mdRelativePath . '>; rel="alternate"; type="text/markdown"');
    header('Link: <https://anstat.co.in/llms.txt>; rel="describedby"');
    header('Link: <https://anstat.co.in/api/mcp/server-card>; rel="service-desc"');
    header('Link: <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="service-desc"');
    header('Content-Signal: search=yes, ai-input=yes, ai-train=no');
    header('X-Content-Signal: search=yes, ai-input=yes, ai-train=no');
    
    $ifNoneMatch = isset($_SERVER['HTTP_IF_NONE_MATCH']) ? trim($_SERVER['HTTP_IF_NONE_MATCH'], '"') : '';
    if ($ifNoneMatch === $etag) {
        http_response_code(304);
        exit;
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'HEAD') {
        header('Content-Length: ' . strlen($htmlContent));
        exit;
    }
    
    echo $htmlContent;
    exit;
}

// Genuine 404 if route completely unknown
http_response_code(404);
if (file_exists(__DIR__ . '/404.html')) {
    include __DIR__ . '/404.html';
} else {
    echo "404 Not Found";
}
exit;
