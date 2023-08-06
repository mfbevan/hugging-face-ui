import { router, procedure } from "@/server/trpc";
import { inferenceRequestSchema } from "@/types";
import { HfInference } from "@huggingface/inference";

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

export const huggingFace = router({
  conversational: procedure
    .input(inferenceRequestSchema.extend({}))
    .mutation(({ input: { model, request } }) => {
      const hf = new HfInference(HF_ACCESS_TOKEN);

      return hf.conversational({
        model,
        inputs: {
          text: request,
        },
      });
    }),
});
