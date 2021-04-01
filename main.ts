import { serve } from './libs/serve.ts';
import routes from './routes/mod.ts';

// Serve by Deno Deploy 
serve(routes);
