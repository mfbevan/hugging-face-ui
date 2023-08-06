export const inferenceEndpoints = [
  "conversational",
  "tokenClassification",
  // "fillMask",
  // "summarization",
  // "textClassification",
  // "textGeneration",
  // "tokenClassification",
  // "translation",
  // "zeroShotClassification",
  // "sentenceSimilarity",
] as const;

export type InferenceEndpoint = (typeof inferenceEndpoints)[number];
