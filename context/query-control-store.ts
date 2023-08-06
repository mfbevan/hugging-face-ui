import { InferenceEndpoint, LanguageModel } from "@/types";
import { QueryHistoryItem } from "@/types/query-history";
import { create } from "zustand";

export const DEFAULT_MODEL: LanguageModel = "microsoft/DialoGPT-large";
export const DEFAULT_ENDPOINT: InferenceEndpoint = "conversational";

export interface QueryControlStore {
  query: string;
  setQuery: (query: string) => void;
  model: LanguageModel | string;
  setModel: (model: LanguageModel | string) => void;
  endpoint: InferenceEndpoint;
  setEndpoint: (endpoint: InferenceEndpoint) => void;
  history: QueryHistoryItem[];
  addToHistory: (item: QueryHistoryItem) => void;
  clearHistory: () => void;
  includeHistory: boolean;
  setIncludeHistory: (includeHistory: boolean) => void;
}

export const useQueryControlStore = create<QueryControlStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  model: DEFAULT_MODEL,
  setModel: (model) => set({ model }),
  endpoint: DEFAULT_ENDPOINT,
  setEndpoint: (endpoint) => set({ endpoint }),
  history: [],
  addToHistory: (item) =>
    set((state) => ({ history: [...state.history, item] })),
  clearHistory: () => set({ history: [] }),
  includeHistory: false,
  setIncludeHistory: (includeHistory) => set({ includeHistory }),
}));
