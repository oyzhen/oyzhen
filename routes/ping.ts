import { html, text, json, Routes } from '../libs/serve.ts';

const routes: Routes = new Map();

routes.set('/ping/html', () => html('<h1>Hello world!</h1>'));

routes.set('/ping/text', () => text('Hello world!'));

routes.set('/ping/json', () => json({ text: 'Hello world!' }));

routes.set('/ping', () => text('pong'));

export default routes;
