import { agentsRouter } from '@/modules/agents/server/procedures';
import { createTRPCRouter } from '../init';

// Maaz - Feature-specific routers (like agentsRouter) are 
//    ... composed into the main app router using createTRPCRouter

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;