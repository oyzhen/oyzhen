interface FetchEvent extends Event {
    readonly request: Request;
    respondWith(res: Response | Promise<Response>): void;
}

addEventListener('fetch', event => {
    console.log('typeof Blob:', typeof Blob);
    console.log('Blob.toString():', Blob?.toString());

    const e = event as FetchEvent;
    e.respondWith(new Response('OK', { status: 200 }));
});
