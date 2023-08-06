export const languageModels = [
  // "bert-base-uncased",
  // "facebook/bart-large-cnn",
  // "distilbert-base-uncased-finetuned-sst-2-english",
  // "gpt2",
  "microsoft/DialoGPT-large",
  // "sentence-transformers/distilbert-base-nli-mean-tokens",
  "dbmdz/bert-large-cased-finetuned-conll03-english",
] as const;

export type LanguageModel = (typeof languageModels)[number];
