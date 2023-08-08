import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export default function Essentials() {
  return (
    <Flex bg="yellow" justify={"center"} gap={8} height="300px">
      <Heading my="auto">Title</Heading>
      <Heading my="auto">Title2</Heading>
      <Heading my="auto">Title2</Heading>
    </Flex>
  );
}
