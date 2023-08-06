import { InferenceEndpoint, LanguageModel } from "@/types";
import { create } from "zustand";

const DEFAULT_MODEL = "gpt2";
const DEFAULT_ENDPOINT = "conversational";

export interface QueryControlStore {
  query: string;
  setQuery: (query: string) => void;
  model: LanguageModel | string;
  setModel: (model: LanguageModel | string) => void;
  endpoint: InferenceEndpoint | string;
  setEndpoint: (endpoint: InferenceEndpoint | string) => void;
}

export const useQueryControlStore = create<QueryControlStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  model: DEFAULT_MODEL,
  setModel: (model) => set({ model }),
  endpoint: DEFAULT_ENDPOINT,
  setEndpoint: (endpoint) => set({ endpoint }),
}));
