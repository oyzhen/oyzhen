// run `deployctl run main.ts` first, then test

import { assertEquals } from './deps.ts';
import { startServer } from './testServer.ts';

const API = 'http://localhost:8080/ping';

// start server
const stopServer = await startServer();

addEventListener('unload', async () => {
    await stopServer();
});

Deno.test('html', async () => {
    const result = await fetch(`${API}/html`).then(res => res.text());
    assertEquals(result, '<h1>Hello world!</h1>');
});

Deno.test('text', async () => {
    const result = await fetch(`${API}/text`).then(res => res.text());
    assertEquals(result, 'Hello world!');
});

Deno.test('json', async () => {
    const result = await fetch(`${API}/json`).then(res => res.json());
    assertEquals(result, { text: 'Hello world!' });
});

Deno.test('404', async () => {
    const res = await fetch(`${API}/404`);
    assertEquals(res.status, 404);
    const text = await res.text();
    assertEquals(text, '404');
});
