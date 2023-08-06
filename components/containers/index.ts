import { Flex, chakra } from "@chakra-ui/react";

export const PageContainer = chakra(Flex, {
  baseStyle: {
    maxW: "4xl",
    flexDirection: "column",
    minH: "100vh",
    mx: "auto",
    pt: "60px",
  },
});
