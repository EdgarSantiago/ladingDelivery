import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  chakra,
} from "@chakra-ui/react";
import ButtonG from "../global/ButtonG";

export default function Hero() {
  return (
    <Box pb={100} height="100%" minH="60vh" bg="#79E99A">
      <Container maxW="8xl" h="100%">
        <SimpleGrid columns={[1, 1, 1, 2]} h="100%">
          <Col1 />
          <Col2 />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Col1() {
  return (
    <Flex justify="center" gap={4} direction={"column"} h="100%">
      <Text fontSize={["lg", "xl", "1xl", "2xl"]}>STARTER PLAN</Text>
      <Heading
        fontSize={["3xl", "4xl", "5xl", "6xl"]}
        lineHeight={1.1}
        fontWeight={600}
      >
        Create a simple store in minutes
      </Heading>
      <Text fontSize={["lg", "xl", "1xl", "2xl"]}>
        Easy no-code setup. Perfect for sharing products across social.
      </Text>

      <ButtonG mx="auto" w="80%" boxShadow={"4px 4px 0px #111111"}>
        GET STARTED FREE
      </ButtonG>

      <chakra.span mx="auto">
        try shopify for free, no credit card required
      </chakra.span>
    </Flex>
  );
}

function Col2() {
  return (
    <Flex justify="center" align="center" gap={4} direction={"column"} h="100%">
      <Image mx="auto" my={"auto"} src="/col2.png" h="500px" w="450px" />
    </Flex>
  );
}
