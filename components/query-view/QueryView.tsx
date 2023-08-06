import { Spacer, chakra, Flex } from "@chakra-ui/react";
import { QueryHistory, QueryControl } from "..";
import { useEffect, useRef } from "react";
import { useQueryControlStore } from "@/context";

export const QueryView = () => {
  const { history } = useQueryControlStore();
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTop = scrollViewRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [history]);

  return (
    <QueryViewContainer>
      <ScrollView ref={scrollViewRef}>
        <QueryHistory />
      </ScrollView>
      <Spacer />
      <QueryControl />
    </QueryViewContainer>
  );
};

const QueryViewContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "10px",
    pb: "10px",
    pt: "60px",
    h: "100vh",
  },
});

const ScrollView = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "20px",
    overflowY: "scroll",
  },
});
