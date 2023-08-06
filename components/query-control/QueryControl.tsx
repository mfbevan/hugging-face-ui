import { useQueryControl, useQueryControlStore } from "@/context";
import {
  chakra,
  LightMode,
  IconButton,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { DetailedQueryControl } from "./DetailedQueryControl";

export interface QueryControlProps {}

export const QueryControl = ({}: QueryControlProps) => {
  const { query, setQuery } = useQueryControlStore();
  const { onSubmit, handleKeyInput, isDisabled, isLoading, inputFieldRef } =
    useQueryControl();

  return (
    <QueryControlContainer>
      <TextAreaContainer>
        <QueryTextarea
          ref={inputFieldRef}
          placeholder="Enter your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyInput}
          isDisabled={isLoading}
          resize="none"
        />
        <LightMode>
          <SubmitButton
            icon={<IoSend />}
            aria-label="Send Query"
            colorScheme="yellow"
            onClick={onSubmit}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        </LightMode>
      </TextAreaContainer>

      <DetailedQueryControl />
    </QueryControlContainer>
  );
};

const QueryControlContainer = chakra(Flex, {
  baseStyle: {
    border: "1px solid",
    borderColor: "border",
    p: "10px",
    boxShadow: "base",
    rounded: "2xl",
    bg: "offsetBg",
    w: "full",
    maxW: "4xl",
    flexDirection: "column",
    gap: "10px",
  },
});

const TextAreaContainer = chakra(Box, {
  baseStyle: {
    position: "relative",
  },
});

const QueryTextarea = chakra(Textarea, {
  baseStyle: {
    w: "full",
    border: "1px solid",
    borderColor: "border",
    rounded: "2xl",
    pr: "60px",
    h: "auto",
  },
});

const SubmitButton = chakra(IconButton, {
  baseStyle: {
    rounded: "2xl",
    boxShadow: "base",
    size: "md",
    w: "fit-content",
    position: "absolute",
    right: "10px",
    bottom: "10px",
    zIndex: 10,
  },
});
