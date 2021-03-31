import { html, json, Routes, serve } from './libs/serve.ts';

const routes: Routes = new Map();

routes.set('/', () => html(`
<h1>WIP: Welcome!</h1>
`))

routes.set('/ping', () => html('<h1>Hello world!</h1>'));

routes.set('/ping/text', () => html('Hello world!'));

routes.set('/ping/json', () => json({ text: 'Hello world!' }));

serve(routes);
