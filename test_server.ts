import { assertEquals } from 'https://deno.land/std@0.91.0/testing/asserts.ts';
import { readLines, readStringDelim } from 'https://deno.land/std@0.91.0/io/mod.ts';

const API = 'http://localhost:8080';

let httpServer: Deno.Process;

const startServer = async () => {
    if (httpServer) {
        return;
    }
    httpServer = Deno.run({
        cmd: ['deployctl', 'run', 'main.ts'],
        stdout: 'piped'
    });
    const out = httpServer.stdout;
    if (!out) {
        httpServer.kill(9);
        throw new Error('Testing server started failfully!');
    }
    await new Promise(r => setTimeout(r, 1000));
    httpServer.kill(9);
    const buf = new Uint8Array(10);
    const decoder = new TextDecoder();
    const l = await out.read(buf);
    const text = decoder.decode(buf);
    console.log(l, '.........', text);
    // for await (const line of readStringDelim(out, '\n')) {
    //     console.log('line: ', line);
    //     if (line.includes('Listening on')) {
    //         break;
    //     }
    // }

};

await startServer();

console.log('Done.');
