import { useQueryControlStore } from "@/context";
import { toTitleCase } from "@/utils";
import { inferenceEndpoints, languageModels } from "@/types";
import {
  chakra,
  LightMode,
  IconButton,
  Textarea,
  Flex,
  Select,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

export interface QueryControlProps {}

export const QueryControl = ({}: QueryControlProps) => {
  const { query, setQuery } = useQueryControlStore();

  return (
    <QueryControlContainer>
      <QueryTextarea
        placeholder="Enter your query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <OptionsContainer>
        <StyledSelect placeholder="Select Model">
          {languageModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect placeholder="Select Endpoint">
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
          />
        </LightMode>
      </OptionsContainer>
    </QueryControlContainer>
  );
};

const QueryTextarea = chakra(Textarea, {
  baseStyle: {
    w: "full",
    border: "1px solid",
    borderColor: "border",
    rounded: "xl",
  },
});

const QueryControlContainer = chakra(Flex, {
  baseStyle: {
    border: "1px solid",
    borderColor: "border",
    p: "10px",
    boxShadow: "base",
    rounded: "2xl",
    bg: "offsetBg",
    bottom: "10px",
    position: "fixed",
    w: "full",
    maxW: "4xl",
    flexDirection: "column",
    gap: "10px",
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
