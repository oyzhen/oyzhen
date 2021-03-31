import homeRoutes from './home.ts';
import pingRoutes from './ping.ts';

export default new Map([...pingRoutes, ...homeRoutes]);
