import { delay } from './deps.ts';
import { killPort } from './libs/killPort.ts';

export const startServer = async () => {
    const httpServer = Deno.run({
        cmd: ['deployctl', 'run', 'main.ts'],
    });

    const closeServer = async () => {
        await killPort(8080);
        httpServer.close();
        console.log('Server stopped.');
    };

    // ping-pong the server
    const START = Date.now();
    const TIMEOUT = 30 * 1000;
    const PING_API = 'http://localhost:8080/ping';
    while (true) {
        const now = Date.now();
        if (now - START > TIMEOUT) {
            await closeServer();
            throw new Error('Server starting timeout.');
        }
        try {
            const result = await fetch(PING_API).then(res => {
                if (res.status !== 200) {
                    throw new Error('Server not started successfully, waiting...');
                }
                return res.text();
            });
            if (result === 'pong') {
                break;
            }
        } catch (error) {
            console.log('Server not ready, will retry in 1s...');
        }
        await delay(1000);
    }

    console.log('Server started.');
    return closeServer;
};

if (import.meta.main) {
    try {
        const destroy = await startServer();
        console.log('Server started.');
        await destroy();
        console.log('Server closed.');
    } catch (error) {
        console.error(error);
    }
}
