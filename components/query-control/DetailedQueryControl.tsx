import { useQueryControlStore, useQueryControl } from "@/context";
import { languageModels, InferenceEndpoint, inferenceEndpoints } from "@/types";
import { toTitleCase } from "@/utils";
import {
  Text,
  Button,
  chakra,
  Collapse,
  Flex,
  FormLabel,
  Select,
  useBoolean,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

export interface DetailedQueryControlProps {}

export const DetailedQueryControl = ({}: DetailedQueryControlProps) => {
  const [showAdvanced, setShowAdvanced] = useBoolean();

  const { model, setModel, endpoint, setEndpoint } = useQueryControlStore();
  const { isLoading } = useQueryControl();

  return (
    <>
      <DetailedOptionsContainer>
        <GeneralOptionsContainer>
          {/* Language Model */}
          <WrapItem>
            <WrappedItem>
              <StyledLabel>Model</StyledLabel>
              <StyledSelect
                placeholder="Select Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                isDisabled={isLoading}
              >
                {languageModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </StyledSelect>
            </WrappedItem>
          </WrapItem>

          {/* Inference Endpoint */}
          <WrapItem>
            <WrappedItem>
              <StyledLabel>Inference Endpoint</StyledLabel>
              <StyledSelect
                placeholder="Select Endpoint"
                value={endpoint}
                onChange={(e) =>
                  setEndpoint(e.target.value as InferenceEndpoint)
                }
                isDisabled={isLoading}
              >
                {inferenceEndpoints.map((endpoint) => (
                  <option key={endpoint} value={endpoint}>
                    {toTitleCase(endpoint)}
                  </option>
                ))}
              </StyledSelect>
            </WrappedItem>
          </WrapItem>
        </GeneralOptionsContainer>

        <Collapse in={showAdvanced}>
          <Divider mt="10px" />
          <AdvancedOptionsContainer>
            <WrapItem>
              <WrappedItem>
                <StyledLabel>Some Advanced Setting</StyledLabel>
              </WrappedItem>
            </WrapItem>

            <WrapItem>
              <WrappedItem>
                <StyledLabel>Another Advanced Setting</StyledLabel>
              </WrappedItem>
            </WrapItem>
          </AdvancedOptionsContainer>
        </Collapse>
      </DetailedOptionsContainer>

      <Flex justifyContent="space-between">
        <Text fontSize="sm" opacity="0.7" pl="10px">
          Powered by{" "}
          <Link
            href="https://huggingface.co/docs/huggingface.js/index"
            target="_blank"
          >
            Huggingface.js
          </Link>
        </Text>

        {/* Advanced Settings Toggle */}
        <Button
          size="xs"
          variant="ghost"
          alignSelf="flex-end"
          onClick={setShowAdvanced.toggle}
        >
          {showAdvanced ? "Hide" : "Show"} Advanced
        </Button>
      </Flex>
    </>
  );
};

const DetailedOptionsContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});

const GeneralOptionsContainer = chakra(Wrap, {
  baseStyle: {
    gap: "10px",
  },
});

const AdvancedOptionsContainer = chakra(Wrap, {
  baseStyle: {
    pt: "10px",
  },
});

const StyledSelect = chakra(Select, {
  baseStyle: {
    rounded: "xl",
  },
});

const StyledLabel = chakra(FormLabel, {
  baseStyle: {
    fontSize: "xs",
    opacity: "0.7",
    m: 0,
    pl: "5px",
  },
});

const WrappedItem = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    maxW: "300px",
  },
});
