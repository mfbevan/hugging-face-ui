import { z } from "zod";
import { languageModels } from ".";

export const inferenceRequestSchema = z.object({
  model: z.enum(languageModels).or(z.string()),
  request: z.string(),
});

export type InferenceRequest = z.infer<typeof inferenceRequestSchema>;
