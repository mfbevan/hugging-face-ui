import { router, procedure } from "@/server/trpc";
import { inferenceRequestSchema } from "@/types";
import { formatResponseHistory } from "@/utils";
import { HfInference } from "@huggingface/inference";

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

export const huggingFace = router({
  conversational: procedure
    .input(inferenceRequestSchema.extend({}))
    .mutation(async ({ input: { model, request, history } }) => {
      const hf = new HfInference(HF_ACCESS_TOKEN);

      const { past_user_inputs, generated_responses } =
        formatResponseHistory(history);

      const response = await hf.conversational({
        model,
        inputs: {
          text: request,
          past_user_inputs,
          generated_responses,
        },
      });

      return response.generated_text;
    }),

  tokenClassification: procedure
    .input(inferenceRequestSchema.extend({}))
    .mutation(async ({ input: { model, request, history } }) => {
      const hf = new HfInference(HF_ACCESS_TOKEN);

      const response = await hf.request({
        model,
        parameters: { model, inputs: request },
      });
      console.log("response", response);

      return response;
    }),
});
