import * as z from "zod";
import { languageModels } from ".";
import { queryHistoryItemSchema } from "./query-history";

export const inferenceRequestSchema = z.object({
  model: z.enum(languageModels).or(z.string()),
  request: z.string(),
  history: z.array(queryHistoryItemSchema).optional(),
});

export type InferenceRequest = z.infer<typeof inferenceRequestSchema>;
