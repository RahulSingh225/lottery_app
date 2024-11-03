import { router } from '../trpc';
import { adminRouter } from './admin';
import { mobileRouter } from './mobile';

export const appRouter = router({
  admin: adminRouter,
  mobile: mobileRouter,
});

export type AppRouter = typeof appRouter;