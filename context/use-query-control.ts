import { KeyboardEvent, useEffect, useMemo, useRef } from "react";
import { DEFAULT_ENDPOINT, useQueryControlStore } from ".";
import { trpc } from "@/utils";
import { InferenceEndpoint } from "@/types";
import { toast } from "react-toastify";

export const useQueryControl = () => {
  const inputFieldRef = useRef<HTMLTextAreaElement>(null);
  const { query, setQuery, model, endpoint, history, addToHistory } =
    useQueryControlStore();

  const conversationalMutation = trpc.huggingFace.conversational.useMutation();
  const tokenClassificationMutation =
    trpc.huggingFace.tokenClassification.useMutation();

  const mutationFn = useMemo(() => {
    switch (endpoint) {
      case "conversational":
        return conversationalMutation;
      case "tokenClassification":
        return tokenClassificationMutation;
      default:
        return conversationalMutation;
    }
  }, [conversationalMutation, endpoint, tokenClassificationMutation]);

  const onSubmit = async () => {
    try {
      if (!query || !model || !endpoint) return;

      const startTime = new Date().getTime();

      const response = await mutationFn.mutateAsync({
        request: query,
        model,
        history,
      });

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
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleKeyInput = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  const isDisabled = !query || query.length === 0 || !model || !endpoint;

  const isLoading = mutationFn && mutationFn.isLoading;

  useEffect(() => {
    if (inputFieldRef.current && !isLoading) {
      inputFieldRef.current.focus();
    }
  }, [inputFieldRef, isLoading]);

  return {
    onSubmit,
    handleKeyInput,
    isDisabled,
    isLoading,
    inputFieldRef,
  };
};
