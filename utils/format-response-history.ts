import { QueryHistoryItem } from "@/types";

/**
 * Formats the conversation respons history so that it is consumable by the HF inference API
 */
export const formatResponseHistory = (history?: QueryHistoryItem[]) => {
  if (!history) return { past_user_inputs: [], generated_responses: [] };

  const reversedHistory = [...history].reverse();

  const past_user_inputs = reversedHistory?.map((item) => item.query) ?? [];
  const generated_responses =
    reversedHistory?.map((item) => item.response) ?? [];

  return {
    past_user_inputs,
    generated_responses,
  };
};
