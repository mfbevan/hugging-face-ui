import { useQueryControlStore } from ".";

export interface UseQueryControlReturn {
  onSubmit: () => void;
}

export const useQueryControl = () => {
  const { query, model, endpoint, addToHistory } = useQueryControlStore();

  const onSubmit = async () => {
    addToHistory({
      timestamp: new Date(),
      response: "This is a response.",
      query,
      model,
      endpoint,
    });
  };

  return {
    onSubmit,
  };
};
