import { router } from "../trpc";
import { health } from "./health";
import { huggingFace } from "./hugging-face";

export const appRouter = router({
  health,
  huggingFace,
});

// export type definition of API
export type AppRouter = typeof appRouter;
