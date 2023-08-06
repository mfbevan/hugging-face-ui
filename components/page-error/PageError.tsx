import { Button, Flex, Heading, LightMode, Link, Text } from "@chakra-ui/react";

export interface PageErrorProps {
  statusCode: string;
  title: string;
  description: string;
}

export const PageError = ({
  statusCode,
  title,
  description,
}: PageErrorProps) => (
  <Flex flexDirection="column" gap={4} mx="auto" my="auto" align="center">
    <Heading fontSize="8xl" color="accent.500">
      {statusCode}
    </Heading>
    <Heading fontSize="4xl" color="accent.300">
      {title}
    </Heading>
    <Text>{description} </Text>
    <Link href="/">
      <LightMode>
        <Button colorScheme="yellow">Back to Home</Button>
      </LightMode>
    </Link>
  </Flex>
);
