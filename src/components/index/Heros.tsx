import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export default function Heros() {
  return (
    <Box height="100%">
      <Container minW="8xl">
        <Hero1 color="blue" />
        <Hero1 color="green" />
        <Hero1 color="red.200" />
      </Container>
    </Box>
  );
}

function Hero1({ color }: any) {
  return <Flex minH="100vh" bg={color}></Flex>;
}
