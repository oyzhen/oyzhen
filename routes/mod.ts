import homeRoutes from './home.ts';
import pingRoutes from './ping.ts';

// Combine routes
export default new Map([...pingRoutes, ...homeRoutes]);
