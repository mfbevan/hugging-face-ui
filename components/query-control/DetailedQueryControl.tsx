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
  FormControl,
  Switch,
  Input,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { FcServices } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";

export interface DetailedQueryControlProps {}

export const DetailedQueryControl = ({}: DetailedQueryControlProps) => {
  const [showAdvanced, setShowAdvanced] = useBoolean();
  const {
    model,
    setModel,
    endpoint,
    setEndpoint,
    includeHistory,
    setIncludeHistory,
    clearHistory,
  } = useQueryControlStore();

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
            {/* Response History */}
            <WrapItem>
              <WrappedItem>
                <StyledLabel>Response History</StyledLabel>
                <Flex>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="include-history" mb="0" ml="10px">
                      Include Response History
                    </FormLabel>
                    <Switch
                      isChecked={includeHistory}
                      onChange={(e) => setIncludeHistory(e.target.checked)}
                      colorScheme="yellow"
                      id="include-history"
                    />
                  </FormControl>
                  <Button
                    colorScheme="red"
                    onClick={clearHistory}
                    rightIcon={<FaTrash />}
                    px="30px"
                  >
                    Clear History
                  </Button>
                </Flex>
              </WrappedItem>
            </WrapItem>
          </AdvancedOptionsContainer>

          <AdvancedOptionsContainer>
            {/* Custom API Key */}
            <WrapItem>
              <WrappedItem>
                <StyledLabel>API Key</StyledLabel>
                <StyledInput placeholder="Hugging Face API Key" />
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
            Huggingface.js 🤗
          </Link>
        </Text>

        {/* Advanced Settings Toggle */}
        <Button
          size="xs"
          variant="ghost"
          alignSelf="flex-end"
          onClick={setShowAdvanced.toggle}
          rightIcon={<FcServices />}
          rounded="lg"
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
    gap: "20px",
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
    w: "xs",
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

const StyledInput = chakra(Input, {
  baseStyle: {
    rounded: "xl",
    w: "xs",
  },
});

const WrappedItem = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});
