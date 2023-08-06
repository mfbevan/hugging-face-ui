import { useQueryControlStore } from "@/context";
import { QueryHistoryItem } from "@/types";
import { toTitleCase } from "@/utils";
import {
  Box,
  Divider,
  Flex,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  Wrap,
  chakra,
} from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";

export const QueryHistory = () => {
  const { history } = useQueryControlStore();

  return (
    <Flex flexDirection="column" gap="10px" pt="20px" px="20px">
      {history.length === 0 && (
        <Text fontSize="md" opacity="0.7" textAlign="center" py="10px">
          Submit a query to get started
        </Text>
      )}
      {history.map((item) => (
        <HistoryItem key={item.timestamp.toString()} {...item} />
      ))}
    </Flex>
  );
};

export const HistoryItem = ({
  timestamp,
  query,
  response,
  model,
  endpoint,
  responseTime,
}: QueryHistoryItem) => {
  return (
    <HistoryItemContainer>
      <TagContainer>
        <Tooltip label="Model">
          <Tag>{model}</Tag>
        </Tooltip>
        <Tooltip label="Endpoint">
          <Tag>{toTitleCase(endpoint)}</Tag>
        </Tooltip>
        <Tooltip label="Response Time">
          <Tag>
            <TagLeftIcon as={BsClockHistory} />
            <TagLabel>{responseTime} ms</TagLabel>
          </Tag>
        </Tooltip>
        <Spacer />
        <HistoryTimestamp>
          {timestamp.toDateString()}
          {", "}
          {timestamp.toLocaleTimeString()}
        </HistoryTimestamp>
      </TagContainer>
      <Flex>
        <QuoteBlock />
        <QueryText opacity="0.7" mt="5px" fontSize="sm">
          {query}
        </QueryText>
      </Flex>
      <Divider my="5px" />
      <QueryText>{response}</QueryText>
    </HistoryItemContainer>
  );
};

const HistoryItemContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    rounded: "2xl",
    border: "1px solid",
    borderColor: "border",
    p: "15px",
  },
});

const TagContainer = chakra(Wrap, {
  baseStyle: {
    gap: "10px",
  },
});

const HistoryTimestamp = chakra(Text, {
  baseStyle: {
    opacity: 0.5,
    fontSize: "sm",
  },
});

const QueryText = chakra(Text, {
  baseStyle: {
    whiteSpace: "pre-line",
  },
});

const QuoteBlock = chakra(Flex, {
  baseStyle: {
    h: "auto",
    w: "3px",
    bg: "border",
    ml: "5px",
    mr: "10px",
    mt: "10px",
    mb: "5px",
  },
});
