/**
 * Request Handler
 */
export type RequestHandler = (request: Request) => Promise<Response>;

/**
 * Request Pattern
 */
export type RoutePattern = string | RegExp | ((request: Request) => boolean);

/**
 * Routes
 */
export type Routes = Map<RoutePattern, RequestHandler>;

/**
 * Create File response
 * @param blob Input File
 * @param init Response Init: status, headers etc.
 */
export async function file(blob: Blob, { headers, ...init }: ResponseInit = {}) {
    // return new Response(blob, init);
    const buffer = await blob.arrayBuffer();
    return new Response(buffer, { headers: { 'Content-Type': blob.type, ...headers }, ...init });
}

/**
 * Create text response
 * @param input Input text
 * @param init Response Init: status, headers etc.
 */
export function text(input: string, init?: ResponseInit) {
    return file(new Blob([input], { type: 'text/plain; charset=utf-8' }), init);
}

/**
 * Create HTML response
 * @param input Input html text
 * @param init Response Init: status, headers etc.
 */
export function html(input: string, init?: ResponseInit) {
    return file(new Blob([input], { type: 'text/html; charset=utf-8' }), init);
}

/**
 * Create JSON response
 * @param data Input data, will be convert to json string
 * @param init Response Init: status, headers etc.
 */
export function json(data: unknown, init?: ResponseInit) {
    return file(new Blob([JSON.stringify(data)], { type: 'application/json; charset=utf-8' }), init);
}

/**
 * Default Not-Found Handler
 */
function defaultNotFound() {
    return html('404', { status: 404 });
}

/**
 * Default Server-Internal-Error Handler
 */
function defaultInternalError() {
    return html('500', { status: 500 });
}

/**
 * Internal handler for all incoming requests
 * @param request Original Request
 * @param routes Routes
 */
function handleRequest(request: Request, routes: Routes): Promise<Response> {
    const { pathname, search } = new URL(request.url);
    const fullPath = pathname + search;
    console.log('fullPath: ', fullPath);
    try {
        for (const [pattern, handler] of routes) {
            let matched = false;
            if (typeof pattern === 'function') {
                matched = pattern(request);
            } else if (pattern instanceof RegExp) {
                matched = pattern.test(fullPath);
            } else {
                matched = pathname == pattern;
            }
            if (!matched) {
                continue;
            }
            return handler(request);
        }
        return (routes.get('/404') ?? defaultNotFound)(request);
    } catch (error) {
        return (routes.get('/500') ?? defaultInternalError)(request);
    }
}

/**
 * TODO: Remove it while Deno updated FetchEvent type
 */
interface FetchEvent extends Event {
    readonly request: Request;
    respondWith(res: Response | Promise<Response>): void;
}

/**
 * Start serving for Deno Deploy
 * @param routes
 */
export function serve(routes: Routes) {
    addEventListener('fetch', event => {
        const e = event as FetchEvent;
        e.respondWith(handleRequest(e.request, routes));
    });
}
