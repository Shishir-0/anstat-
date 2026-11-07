<?php
/**
 * ANSTAT Official Streamable HTTP Model Context Protocol (MCP) Server
 * Transport: Streamable HTTP
 * Protocol Version: 2025-11-25
 * Specification: https://modelcontextprotocol.io/
 */

declare(strict_types=1);

// Prevent caching
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// -----------------------------------------------------------------------------
// 1. Origin Validation & DNS Rebinding Protection
// -----------------------------------------------------------------------------
$allowedOriginPatterns = [
    '/^https:\/\/(?:www\.)?anstat\.co\.in$/i',
    '/^http:\/\/localhost(?::\d+)?$/i',
    '/^https:\/\/localhost(?::\d+)?$/i',
    '/^http:\/\/127\.0\.0\.1(?::\d+)?$/i',
    '/^https:\/\/127\.0\.0\.1(?::\d+)?$/i'
];

$incomingOrigin = $_SERVER['HTTP_ORIGIN'] ?? null;
$originValidated = false;

if ($incomingOrigin !== null && $incomingOrigin !== '') {
    foreach ($allowedOriginPatterns as $pattern) {
        if (preg_match($pattern, $incomingOrigin)) {
            $originValidated = true;
            header("Access-Control-Allow-Origin: {$incomingOrigin}");
            header('Vary: Origin, Accept');
            break;
        }
    }

    if (!$originValidated) {
        http_response_code(403);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'jsonrpc' => '2.0',
            'error' => [
                'code' => -32003,
                'message' => 'Forbidden: Invalid or untrusted Origin header.'
            ],
            'id' => null
        ], JSON_UNESCAPED_SLASHES);
        exit;
    }
} else {
    // Non-browser client (curl, CLI, Claude Desktop, backend agents) - allow directly
    header('Vary: Origin, Accept');
}

// -----------------------------------------------------------------------------
// 2. CORS Preflight (OPTIONS)
// -----------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit;
}

// -----------------------------------------------------------------------------
// 3. Rate Limiting (60 requests per minute per IP)
// -----------------------------------------------------------------------------
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
// Take first IP if multiple in X-Forwarded-For
if (strpos($clientIp, ',') !== false) {
    $clientIp = trim(explode(',', $clientIp)[0]);
}
$rateLimitKey = sys_get_temp_dir() . '/mcp_rl_' . md5($clientIp) . '.json';
$now = time();
$requests = [];

if (file_exists($rateLimitKey)) {
    $content = @file_get_contents($rateLimitKey);
    if ($content !== false) {
        $decoded = @json_decode($content, true);
        if (is_array($decoded)) {
            // Filter timestamps within last 60 seconds
            $requests = array_filter($decoded, fn($t) => ($now - $t) < 60);
        }
    }
}

if (count($requests) >= 60) {
    http_response_code(429);
    header('Retry-After: 60');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => [
            'code' => -32000,
            'message' => 'Too Many Requests: Rate limit exceeded (60 requests/minute). Please retry after 60 seconds.'
        ],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

$requests[] = $now;
@file_put_contents($rateLimitKey, json_encode($requests), LOCK_EX);

// -----------------------------------------------------------------------------
// 4. Company & Service Knowledge Base
// -----------------------------------------------------------------------------
$COMPANY_DATA = [
    'name' => 'ANSTAT',
    'legalName' => 'ANSTAT',
    'domain' => 'https://anstat.co.in',
    'canonicalUrl' => 'https://anstat.co.in/',
    'headquarters' => 'Bengaluru, Karnataka, India',
    'email' => 'connect@anstat.co.in',
    'phone' => '+919019731057',
    'operatingHours' => 'Monday to Friday, 9:00 AM - 6:00 PM IST',
    'consultationUrl' => 'https://anstat.co.in/contact',
    'leadershipPhilosophy' => 'Direct collaboration with principal engineers and commercial growth leads under a unified technical delivery team.',
    'ipPolicy' => '100% client intellectual property ownership of custom software code, repositories, databases, and media assets upon milestone delivery.',
    'dataGovernance' => 'Strict enterprise data isolation. Zero client proprietary data is ever utilized to train public commercial foundation models.',
    'pricingModel' => 'Milestone-based, fixed-scope quotation model. No opaque hourly billing or arbitrary retainers.',
    'divisions' => [
        [
            'id' => 'technology',
            'name' => 'ANSTAT Technology',
            'url' => 'https://anstat.co.in/software-development',
            'headline' => 'Custom Software, Web Platforms & System Integrations',
            'startingScope' => 'From ₹50,000 / milestone scope',
            'stack' => ['React', 'Vite', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
            'deliverables' => [
                'Website & Web Application Development',
                'Custom Software Engineering',
                'ERP Development & Customization',
                'API Development & System Integrations',
                'Application Modernization & SLA Maintenance',
                'Internal Business KPI Dashboards'
            ]
        ],
        [
            'id' => 'ai',
            'name' => 'ANSTAT AI',
            'url' => 'https://anstat.co.in/ai-solutions',
            'headline' => 'Applied AI Solutions, Autonomous Agents & Workflow Automation',
            'startingScope' => 'From ₹75,000 / implementation sprint',
            'stack' => ['Agentic SDLC', 'pgvector', 'RAG architectures', 'Fine-tuned SLMs', 'Streaming Voice STT/TTS', 'FastAPI'],
            'deliverables' => [
                'Customized AI Business Solutions',
                'Autonomous AI Agents & Multi-step Orchestration',
                'LLM Application Engineering & Token Optimization',
                'RAG & Enterprise Knowledge Assistants',
                'AI Integrations with Existing ERP/CRM Databases',
                'Sub-500ms Voice AI & Telephony Routing'
            ]
        ],
        [
            'id' => 'growth-media',
            'name' => 'ANSTAT Growth & Media',
            'url' => 'https://anstat.co.in/marketing-agency-bengaluru',
            'headline' => 'Marketing Strategy, Performance Advertising, Commercial Videography & SEO',
            'startingScope' => 'From ₹35,000 / month retainer (Marketing/SEO) | From ₹30,000 / production day (Videography)',
            'stack' => ['Meta Ads Manager', 'Google Search & Display', 'LinkedIn Campaign Manager', 'Cinema 4K Optics', 'GA4 / GTM', 'Schema.org'],
            'deliverables' => [
                'Digital Marketing Strategy & Brand Positioning',
                'Performance Marketing & Paid Ad Management',
                'Commercial Advertisement Videography & 4K Production',
                'Social Media Management & Editorial Calendars',
                'Technical & Local SEO for Bengaluru and India',
                'Conversion Rate Optimization (CRO) & GA4 Tracking'
            ]
        ],
        [
            'id' => 'business-solutions',
            'name' => 'ANSTAT Business Solutions',
            'url' => 'https://anstat.co.in/business-solutions',
            'headline' => 'Business Analysis, Operational Improvement & Implementation Management',
            'startingScope' => 'From ₹45,000 / audit sprint',
            'stack' => ['Process Mapping', 'Bottleneck Audits', 'SOP Frameworks', 'CRM Pipelines', 'Agile Sprint Governance'],
            'deliverables' => [
                'Business Process Analysis & Workflow Audits',
                'Business Growth Consulting & Sales Pipelines',
                'Corporate Event Management & AV Production',
                'Standard Operating Procedures (SOPs) Formulation',
                'Sprint Implementation & Vendor UAT Management'
            ]
        ]
    ],
    'caseStudies' => [
        [
            'client' => 'UK GradLink',
            'industry' => 'Education & Admissions',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Centralized admissions management portal and document processing assistant eliminating international intake bottlenecks.',
            'techStack' => 'React, Vite, Node.js, PostgreSQL, Tailwind CSS'
        ],
        [
            'client' => 'LVBL',
            'industry' => 'Lifestyle & Digital Commerce',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Full-stack digital commerce storefront, catalog synchronization, and multi-channel customer acquisition funnels.',
            'techStack' => 'React, Node.js, Commerce APIs, Meta Ads, GA4'
        ],
        [
            'client' => 'Universal PU College Ramanagara',
            'industry' => 'Higher Secondary Education',
            'domain' => 'upuc.in',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Authoritative institutional admissions portal and campus curriculum showcase delivering seamless inquiry routing.',
            'techStack' => 'React, Vite, Tailwind CSS, Institutional Forms'
        ],
        [
            'client' => 'Coastal Catch Co.',
            'industry' => 'Food Distribution & B2B Wholesale',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Cinema-grade 4K commercial advertisement videos and B2B wholesale buyer acquisition funnels.',
            'techStack' => 'Cinema 4K Videography, Meta & Google Ads, Landing Architecture'
        ],
        [
            'client' => 'NEB Real Estate Agency',
            'industry' => 'Commercial & Land Real Estate',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Brand identity formulation, presentation collateral, and targeted customer acquisition funnels.',
            'techStack' => 'Brand Identity, Campaign Design, Lead Pipelines'
        ],
        [
            'client' => 'Dusk Enterprise',
            'industry' => 'Software Studio & Interactive 3D SaaS',
            'domain' => 'duskenterprise.com',
            'url' => 'https://anstat.co.in/case-studies',
            'summary' => 'Digital showcase platform and interactive SaaS demonstration funnels for the creators of 3D Menu.',
            'techStack' => 'React, Vite, Tailwind CSS, Interactive Architecture, Technical SEO'
        ]
    ]
];

// Alias mapping for intelligent service keyword search
$KEYWORD_ALIASES = [
    'commercial video' => ['videography', 'video production', 'commercial advertisement videography', 'reels', 'film'],
    'video' => ['videography', 'commercial videography', 'commercial video', 'film'],
    'videography' => ['commercial videography', 'advertisement videography', '4k production'],
    'web development' => ['website & web application development', 'custom software', 'react', 'next.js', 'frontend'],
    'website' => ['website & web application development', 'web application'],
    'software' => ['custom software engineering', 'web application development', 'erp development'],
    'enterprise ai' => ['customized ai business solutions', 'applied ai', 'llm', 'autonomous agents'],
    'ai' => ['applied ai solutions', 'autonomous ai agents', 'rag', 'llm'],
    'rag' => ['rag & enterprise knowledge assistants', 'vector search', 'pgvector'],
    'knowledge assistant' => ['rag & enterprise knowledge assistants', 'vector search'],
    'agent' => ['autonomous ai agents & multi-step orchestration', 'agentic workflow'],
    'agents' => ['autonomous ai agents & multi-step orchestration'],
    'erp' => ['erp development & customization', 'enterprise resource planning'],
    'seo' => ['technical & local seo for bengaluru and india', 'search engine optimization', 'local seo'],
    'marketing' => ['digital marketing strategy & brand positioning', 'performance marketing & paid ad management'],
    'digital marketing' => ['digital marketing strategy', 'performance marketing', 'seo'],
    'advertising' => ['performance marketing & paid ad management', 'meta ads', 'google search'],
    'paid ads' => ['performance marketing & paid ad management'],
    'social media' => ['social media management & editorial calendars'],
    'business solutions' => ['business process analysis & workflow audits', 'operations improvement'],
    'process analysis' => ['business process analysis & workflow audits', 'bottleneck audits'],
    'sop' => ['standard operating procedures (sops) formulation'],
    'event' => ['corporate event management & av production']
];

// Helper: Intelligent Service Search
function searchServices(string $query, array $divisions, array $aliases): array {
    $q = strtolower(trim($query));
    if ($q === '') return [];

    // Expand search terms using alias dictionary
    $searchTerms = [$q];
    foreach ($aliases as $aliasKey => $aliasValues) {
        if (str_contains($q, $aliasKey) || str_contains($aliasKey, $q)) {
            $searchTerms = array_merge($searchTerms, $aliasValues);
        }
    }
    $searchTerms = array_unique(array_map('strtolower', $searchTerms));

    $scoredMatches = [];

    foreach ($divisions as $d) {
        $score = 0;
        $matchedDeliverables = [];

        foreach ($searchTerms as $term) {
            if (stripos($d['name'], $term) !== false) $score += 10;
            if (stripos($d['headline'], $term) !== false) $score += 8;

            foreach ($d['deliverables'] as $deliv) {
                if (stripos($deliv, $term) !== false) {
                    $score += 6;
                    $matchedDeliverables[] = $deliv;
                }
            }

            foreach ($d['stack'] as $tech) {
                if (stripos($tech, $term) !== false) {
                    $score += 4;
                }
            }
        }

        if ($score > 0) {
            $scoredMatches[] = [
                'score' => $score,
                'division' => $d['name'],
                'url' => $d['url'],
                'headline' => $d['headline'],
                'startingScope' => $d['startingScope'],
                'matchingDeliverables' => array_values(array_unique($matchedDeliverables)),
                'allDeliverables' => $d['deliverables'],
                'technologyStack' => $d['stack']
            ];
        }
    }

    // Sort by score descending
    usort($scoredMatches, fn($a, $b) => $b['score'] <=> $a['score']);

    // Remove internal score from returned output
    return array_map(function($m) {
        unset($m['score']);
        return $m;
    }, $scoredMatches);
}

// -----------------------------------------------------------------------------
// 5. GET Request Handler (Streamable HTTP Server Status / Discovery)
// -----------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $requestUri = $_SERVER['REQUEST_URI'] ?? '';
    if (strpos($requestUri, 'server-card') !== false) {
        require_once __DIR__ . '/server-card.php';
        exit;
    }

    $acceptHeader = $_SERVER['HTTP_ACCEPT'] ?? '';

    // If client specifically requested text/event-stream, stream metadata in SSE format
    if (stripos($acceptHeader, 'text/event-stream') !== false && stripos($acceptHeader, 'application/json') === false) {
        header('Content-Type: text/event-stream; charset=utf-8');
        header('Cache-Control: no-cache, no-transform');
        header('Connection: keep-alive');
        header('X-Accel-Buffering: no');

        $statusData = json_encode([
            'status' => 'ready',
            'server' => 'anstat-public-mcp',
            'protocolVersion' => '2025-11-25',
            'transport' => 'streamable-http'
        ], JSON_UNESCAPED_SLASHES);

        echo "event: message\ndata: {$statusData}\n\n";
        flush();
        exit;
    }

    // Standard JSON status document
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'status' => 'online',
        'server' => 'anstat-public-mcp',
        'version' => '1.0.0',
        'protocolVersion' => '2025-11-25',
        'transport' => 'streamable-http',
        'endpoint' => 'https://anstat.co.in/api/mcp',
        'capabilities' => [
            'tools' => 5,
            'resources' => 2
        ],
        'serverCard' => 'https://anstat.co.in/api/mcp/server-card',
        'serverCardCompatibility' => 'https://anstat.co.in/.well-known/mcp/server-card.json',
        'provider' => [
            'name' => 'ANSTAT',
            'headquarters' => 'Bengaluru, Karnataka, India',
            'website' => 'https://anstat.co.in'
        ]
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

// -----------------------------------------------------------------------------
// 6. POST Request Handler (JSON-RPC 2.0 Streamable HTTP)
// -----------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST, GET, OPTIONS');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32600, 'message' => 'Method Not Allowed: Use POST for JSON-RPC 2.0 requests.'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Validate Content-Type
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (!str_contains(strtolower($contentType), 'application/json')) {
    http_response_code(415);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32700, 'message' => 'Unsupported Media Type: Content-Type must be application/json'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Validate Accept Header
$accept = $_SERVER['HTTP_ACCEPT'] ?? '*/*';
if ($accept !== '*/*' && !str_contains($accept, 'application/json') && !str_contains($accept, 'text/event-stream')) {
    http_response_code(406);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32600, 'message' => 'Not Acceptable: Client must accept application/json or text/event-stream'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Validate Payload Size (Max 1MB)
$input = file_get_contents('php://input');
if ($input === false || strlen($input) > 1048576) {
    http_response_code(413);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32600, 'message' => 'Payload Too Large: Maximum JSON-RPC body size is 1MB.'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

if (trim($input) === '') {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32700, 'message' => 'Parse error: Empty request body.'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Parse JSON
$request = @json_decode($input, true);
if (!is_array($request)) {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32700, 'message' => 'Parse error: Malformed JSON syntax.'],
        'id' => null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Validate JSON-RPC 2.0 envelope
if (!isset($request['jsonrpc']) || $request['jsonrpc'] !== '2.0' || !isset($request['method']) || !is_string($request['method'])) {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'jsonrpc' => '2.0',
        'error' => ['code' => -32600, 'message' => 'Invalid Request: Missing required jsonrpc 2.0 version or method.'],
        'id' => $request['id'] ?? null
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

$method = $request['method'];
$id = $request['id'] ?? null;
$params = (isset($request['params']) && is_array($request['params'])) ? $request['params'] : [];

// -----------------------------------------------------------------------------
// 7. Notification Handling (Zero JSON-RPC Response)
// In JSON-RPC 2.0, notifications omit 'id' or are notification methods.
// -----------------------------------------------------------------------------
if ($method === 'notifications/initialized' || $method === 'notifications/cancelled' || ($id === null && str_starts_with($method, 'notifications/'))) {
    // Return HTTP 204 No Content with empty body as required by Streamable HTTP
    http_response_code(204);
    exit;
}

// Helper to send response (JSON or SSE depending on Accept header)
function sendJsonResponse(array $payload, int $statusCode = 200) {
    http_response_code($statusCode);
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $json = json_encode($payload, JSON_UNESCAPED_SLASHES);

    if (stripos($accept, 'text/event-stream') !== false && stripos($accept, 'application/json') === false) {
        header('Content-Type: text/event-stream; charset=utf-8');
        echo "event: message\ndata: {$json}\n\n";
    } else {
        header('Content-Type: application/json; charset=utf-8');
        echo $json;
    }
    exit;
}

// Helper to send JSON-RPC error
function sendJsonRpcError(int $code, string $message, $id = null, int $httpStatus = 200) {
    sendJsonResponse([
        'jsonrpc' => '2.0',
        'id' => $id,
        'error' => [
            'code' => $code,
            'message' => $message
        ]
    ], $httpStatus);
}

// -----------------------------------------------------------------------------
// 8. Method Dispatcher
// -----------------------------------------------------------------------------
switch ($method) {
    case 'initialize':
        $clientVersion = $params['protocolVersion'] ?? '2025-11-25';
        $supportedVersions = ['2025-11-25', '2025-03-26', '2024-11-05'];
        
        // Negotiate protocol version
        $negotiatedVersion = '2025-11-25';
        if (in_array($clientVersion, $supportedVersions, true)) {
            $negotiatedVersion = $clientVersion;
        }

        sendJsonResponse([
            'jsonrpc' => '2.0',
            'id' => $id,
            'result' => [
                'protocolVersion' => $negotiatedVersion,
                'capabilities' => [
                    'tools' => ['listChanged' => false],
                    'resources' => ['subscribe' => false, 'listChanged' => false]
                ],
                'serverInfo' => [
                    'name' => 'anstat-public-mcp',
                    'version' => '1.0.0'
                ],
                'instructions' => 'Official ANSTAT read-only discovery server. Query company background, discover 24 service capabilities, inspect case studies, and retrieve verified contact channels.'
            ]
        ]);
        break;

    case 'ping':
        sendJsonResponse([
            'jsonrpc' => '2.0',
            'id' => $id,
            'result' => new stdClass()
        ]);
        break;

    case 'tools/list':
        $tools = [
            [
                'name' => 'anstat_get_company_info',
                'description' => 'Retrieve verified corporate background, legal identity, headquarters in Bengaluru, operating philosophy, IP ownership policy, enterprise data isolation, and verified contact channels for ANSTAT.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => new stdClass(),
                    'additionalProperties' => false
                ]
            ],
            [
                'name' => 'anstat_discover_services',
                'description' => 'Discover all four core service divisions of ANSTAT (Technology, AI, Growth & Media, Business Solutions), their 24 deliverables, starting scope pricing, and canonical URLs.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => [
                        'divisionId' => [
                            'type' => 'string',
                            'description' => 'Optional division filter',
                            'enum' => ['technology', 'ai', 'growth-media', 'business-solutions']
                        ]
                    ],
                    'additionalProperties' => false
                ]
            ],
            [
                'name' => 'anstat_get_service_details',
                'description' => 'Retrieve deep technical scope, technologies, deliverables, starting scope pricing, and delivery methodology for a specific capability using intelligent keyword normalization.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => [
                        'query' => [
                            'type' => 'string',
                            'description' => 'Search keyword (e.g., commercial video, web development, enterprise AI, RAG, ERP, SEO)'
                        ]
                    ],
                    'required' => ['query'],
                    'additionalProperties' => false
                ]
            ],
            [
                'name' => 'anstat_find_case_studies',
                'description' => 'Search verified commercial projects and demonstrable client outcomes delivered by ANSTAT by industry or technology focus.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => [
                        'industry' => [
                            'type' => 'string',
                            'description' => 'Industry keyword (education, lifestyle, food, real estate, saas, all)'
                        ]
                    ],
                    'additionalProperties' => false
                ]
            ],
            [
                'name' => 'anstat_get_contact_channels',
                'description' => 'Retrieve verified public contact channels, email address, direct telephone, office location in Bengaluru, and consultation intake procedures.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => new stdClass(),
                    'additionalProperties' => false
                ]
            ]
        ];

        sendJsonResponse([
            'jsonrpc' => '2.0',
            'id' => $id,
            'result' => ['tools' => $tools]
        ]);
        break;

    case 'tools/call':
        $toolName = $params['name'] ?? '';
        $arguments = (isset($params['arguments']) && is_array($params['arguments'])) ? $params['arguments'] : [];

        if ($toolName === 'anstat_get_company_info') {
            $data = [
                'name' => $COMPANY_DATA['name'],
                'legalName' => $COMPANY_DATA['legalName'],
                'canonicalUrl' => $COMPANY_DATA['canonicalUrl'],
                'headquarters' => $COMPANY_DATA['headquarters'],
                'email' => $COMPANY_DATA['email'],
                'phone' => $COMPANY_DATA['phone'],
                'operatingHours' => $COMPANY_DATA['operatingHours'],
                'leadershipPhilosophy' => $COMPANY_DATA['leadershipPhilosophy'],
                'ipPolicy' => $COMPANY_DATA['ipPolicy'],
                'dataGovernance' => $COMPANY_DATA['dataGovernance'],
                'pricingModel' => $COMPANY_DATA['pricingModel'],
                'consultationUrl' => $COMPANY_DATA['consultationUrl']
            ];
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
                        ]
                    ]
                ]
            ]);
        } elseif ($toolName === 'anstat_discover_services') {
            $divisionId = isset($arguments['divisionId']) ? strtolower(trim((string)$arguments['divisionId'])) : null;
            if ($divisionId) {
                $allowedDivs = ['technology', 'ai', 'growth-media', 'business-solutions'];
                if (!in_array($divisionId, $allowedDivs, true)) {
                    sendJsonRpcError(-32602, "Invalid params: 'divisionId' must be one of: " . implode(', ', $allowedDivs), $id);
                }
                $matched = null;
                foreach ($COMPANY_DATA['divisions'] as $d) {
                    if ($d['id'] === $divisionId) {
                        $matched = $d;
                        break;
                    }
                }
                $resultData = ['division' => $matched];
            } else {
                $resultData = [
                    'totalDivisions' => count($COMPANY_DATA['divisions']),
                    'divisions' => $COMPANY_DATA['divisions']
                ];
            }
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => json_encode($resultData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
                        ]
                    ]
                ]
            ]);
        } elseif ($toolName === 'anstat_get_service_details') {
            if (!isset($arguments['query']) || !is_string($arguments['query']) || trim($arguments['query']) === '') {
                sendJsonRpcError(-32602, "Invalid params: Missing required parameter 'query'.", $id);
            }
            $query = trim($arguments['query']);
            $matches = searchServices($query, $COMPANY_DATA['divisions'], $KEYWORD_ALIASES);
            $resultData = [
                'query' => $query,
                'matchCount' => count($matches),
                'results' => $matches
            ];
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => json_encode($resultData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
                        ]
                    ]
                ]
            ]);
        } elseif ($toolName === 'anstat_find_case_studies') {
            $industry = isset($arguments['industry']) ? strtolower(trim((string)$arguments['industry'])) : 'all';
            if ($industry === '' || $industry === 'all') {
                $resultData = [
                    'totalCount' => count($COMPANY_DATA['caseStudies']),
                    'caseStudies' => $COMPANY_DATA['caseStudies']
                ];
            } else {
                $filtered = [];
                foreach ($COMPANY_DATA['caseStudies'] as $cs) {
                    if (stripos($cs['industry'], $industry) !== false || stripos($cs['client'], $industry) !== false || stripos($cs['techStack'], $industry) !== false) {
                        $filtered[] = $cs;
                    }
                }
                $resultData = [
                    'filter' => $industry,
                    'count' => count($filtered),
                    'caseStudies' => $filtered
                ];
            }
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => json_encode($resultData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
                        ]
                    ]
                ]
            ]);
        } elseif ($toolName === 'anstat_get_contact_channels') {
            $data = [
                'email' => $COMPANY_DATA['email'],
                'phone' => $COMPANY_DATA['phone'],
                'office' => $COMPANY_DATA['headquarters'],
                'consultationUrl' => $COMPANY_DATA['consultationUrl'],
                'operatingHours' => $COMPANY_DATA['operatingHours'],
                'inquiryResponseTime' => 'Within 24 business hours',
                'pricingPolicy' => $COMPANY_DATA['pricingModel']
            ];
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
                        ]
                    ]
                ]
            ]);
        } else {
            sendJsonRpcError(-32601, "Tool '{$toolName}' not found. Use tools/list to see available tools.", $id);
        }
        break;

    case 'resources/list':
        $resources = [
            [
                'uri' => 'anstat://manifest/llms.txt',
                'name' => 'ANSTAT LLM Discovery Manifest',
                'mimeType' => 'text/plain',
                'description' => 'Root-level guidance manifest with service descriptions and case study references'
            ],
            [
                'uri' => 'anstat://research/ai-startup-architecture',
                'name' => 'The Architecture of Scalable AI Startups (R&D Paper)',
                'mimeType' => 'text/markdown',
                'description' => 'ANSTAT Strategic Research on Agentic SDLC, unit economics, and data isolation'
            ]
        ];
        sendJsonResponse([
            'jsonrpc' => '2.0',
            'id' => $id,
            'result' => ['resources' => $resources]
        ]);
        break;

    case 'resources/read':
        $uri = $params['uri'] ?? '';
        if ($uri === 'anstat://manifest/llms.txt') {
            $filePath = __DIR__ . '/../llms.txt';
            if (!file_exists($filePath)) {
                $filePath = __DIR__ . '/llms.txt';
            }
            $content = file_exists($filePath) ? file_get_contents($filePath) : 'ANSTAT LLM Manifest';
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'contents' => [
                        [
                            'uri' => $uri,
                            'mimeType' => 'text/plain',
                            'text' => $content
                        ]
                    ]
                ]
            ]);
        } elseif ($uri === 'anstat://research/ai-startup-architecture') {
            $filePath = __DIR__ . '/../markdown/research/ai-startup-architecture.md';
            if (!file_exists($filePath)) {
                $filePath = __DIR__ . '/../markdown/research.md';
            }
            $content = file_exists($filePath) ? file_get_contents($filePath) : 'Research Paper';
            sendJsonResponse([
                'jsonrpc' => '2.0',
                'id' => $id,
                'result' => [
                    'contents' => [
                        [
                            'uri' => $uri,
                            'mimeType' => 'text/markdown',
                            'text' => $content
                        ]
                    ]
                ]
            ]);
        } else {
            sendJsonRpcError(-32002, "Resource '{$uri}' not found.", $id);
        }
        break;

    default:
        sendJsonRpcError(-32601, "Method '{$method}' not found.", $id);
        break;
}

