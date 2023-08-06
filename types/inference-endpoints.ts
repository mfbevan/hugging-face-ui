export const inferenceEndpoints = [
  "fillMask",
  "summarization",
  "textClassification",
  "textGeneration",
  "tokenClassification",
  "translation",
  "zeroShotClassification",
  "conversational",
  "sentenceSimilarity",
];

export type InferenceEndpoint = (typeof inferenceEndpoints)[number];
