import { InferenceEndpoint, LanguageModel } from ".";

export interface QueryHistoryItem {
  timestamp: Date;
  query: string;
  response: string;
  model: LanguageModel | string;
  endpoint: InferenceEndpoint | string;
}
