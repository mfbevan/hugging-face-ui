export const languageModels = [
  "bert-base-uncased",
  "facebook/bart-large-cnn",
  "distilbert-base-uncased-finetuned-sst-2-english",
  "gpt2",
] as const;

export type LanguageModel = (typeof languageModels)[number];
