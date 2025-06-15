import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `Hello, ${opts.input.text}!`,
        message: `Welcome back to Thirdman AI`
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;