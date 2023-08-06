import { KeyboardEvent } from "react";
import { useQueryControlStore } from ".";

export interface UseQueryControlReturn {
  onSubmit: () => void;
  handleKeyInput: (event: { key: string }) => void;
}

export const useQueryControl = () => {
  const { query, setQuery, model, endpoint, addToHistory } =
    useQueryControlStore();

  const onSubmit = async () => {
    if (!query || !model || !endpoint) return;

    addToHistory({
      timestamp: new Date(),
      response: "This is a response.",
      query,
      model,
      endpoint,
    });

    // TODO execute query action

    setQuery("");
  };

  const handleKeyInput = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  const isDisabled = query.length === 0 || !model || !endpoint;

  return {
    onSubmit,
    handleKeyInput,
    isDisabled,
  };
};
