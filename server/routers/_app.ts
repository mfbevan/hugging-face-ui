import { router } from "../trpc";
import { health } from "./health";

export const appRouter = router({
  health,
});

// export type definition of API
export type AppRouter = typeof appRouter;
