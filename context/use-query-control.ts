import { KeyboardEvent, useRef } from "react";
import { useQueryControlStore } from ".";
import { trpc } from "@/utils";

export const useQueryControl = () => {
  const inputFieldRef = useRef<HTMLTextAreaElement>(null);
  const { query, setQuery, model, endpoint, addToHistory } =
    useQueryControlStore();

  const mutation = trpc.huggingFace.conversational.useMutation({});

  const onSubmit = async () => {
    if (!query || !model || !endpoint) return;

    const startTime = new Date().getTime();

    // TODO switch based on the endpoint
    const mutationResponse = await mutation.mutateAsync({
      request: query,
      model,
    });

    const response = mutationResponse.generated_text;

    const responseTime = new Date().getTime() - startTime;

    addToHistory({
      timestamp: new Date(),
      response,
      query,
      model,
      endpoint,
      responseTime,
    });

    setQuery("");
    inputFieldRef.current?.focus();
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
    mutation,
    inputFieldRef,
  };
};
