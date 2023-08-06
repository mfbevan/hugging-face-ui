import { router, procedure } from "@/server/trpc";

export const health = router({
  getHealth: procedure.query(() => {
    return {
      status: "ok",
    };
  }),
});
