import { useQueryControl, useQueryControlStore } from "@/context";
import { toTitleCase } from "@/utils";
import { inferenceEndpoints, languageModels } from "@/types";
import {
  chakra,
  LightMode,
  IconButton,
  Textarea,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import Link from "next/link";

export interface QueryControlProps {}

export const QueryControl = ({}: QueryControlProps) => {
  const { query, setQuery, model, setModel, endpoint, setEndpoint } =
    useQueryControlStore();
  const { onSubmit, handleKeyInput, isDisabled } = useQueryControl();

  return (
    <QueryControlContainer>
      <QueryTextarea
        placeholder="Enter your query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyInput}
      />
      <OptionsContainer>
        <StyledSelect
          placeholder="Select Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          {languageModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect
          placeholder="Select Endpoint"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        >
          {inferenceEndpoints.map((endpoint) => (
            <option key={endpoint} value={endpoint}>
              {toTitleCase(endpoint)}
            </option>
          ))}
        </StyledSelect>
        <LightMode>
          <SubmitButton
            icon={<IoSend />}
            aria-label="Send Query"
            colorScheme="yellow"
            onClick={onSubmit}
            isDisabled={isDisabled}
          />
        </LightMode>
      </OptionsContainer>
      <Text fontSize="sm" opacity="0.7" pl="10px">
        Powered by{" "}
        <Link
          href="https://huggingface.co/docs/huggingface.js/index"
          target="_blank"
        >
          Huggingface.js
        </Link>
      </Text>
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

const QueryTextarea = chakra(Textarea, {
  baseStyle: {
    w: "full",
    border: "1px solid",
    borderColor: "border",
    rounded: "xl",
    maxH: "200px",
  },
});

const SubmitButton = chakra(IconButton, {
  baseStyle: {
    rounded: "xl",
    boxShadow: "base",
    size: "md",
    w: "fit-content",
  },
});

const OptionsContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const StyledSelect = chakra(Select, {
  baseStyle: {
    rounded: "lg",
  },
});
