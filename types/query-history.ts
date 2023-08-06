import { z } from "zod";
import { inferenceEndpoints, languageModels } from ".";

export const queryHistoryItemSchema = z.object({
  timestamp: z.coerce.date(),
  query: z.string(),
  response: z.string(),
  model: z.enum(languageModels).or(z.string()),
  endpoint: z.enum(inferenceEndpoints).or(z.string()),
  responseTime: z.number(),
});

export type QueryHistoryItem = z.infer<typeof queryHistoryItemSchema>;
