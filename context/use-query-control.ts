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

    const startTime = new Date().getTime();

    // TODO execute HF Query
    const response = (
      await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      )
    ).body;

    console.log(response);

    const endTime = new Date().getTime();

    const responseTime = endTime - startTime;

    addToHistory({
      timestamp: new Date(),
      response,
      query,
      model,
      endpoint,
      responseTime,
    });

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
