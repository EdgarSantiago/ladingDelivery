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

interface HeroDynamicPro {
  title?: string;
  description?: string;
  reverseColumns?: boolean;
}

export default function HeroDynamic({
  reverseColumns = false,
  title,
  description,
}: HeroDynamicPro) {
  return (
    <Box minH="100vh" height="100%" my={2}>
      <Container maxW="8xl" h="100%">
        <SimpleGrid spacing={[4, 6, 8]} columns={[1, 1, 2, 2]} h="100%">
          {reverseColumns ? (
            <Col2 />
          ) : (
            <Col1 title={title} description={description} />
          )}
          {reverseColumns ? (
            <Col1 title={title} description={description} />
          ) : (
            <Col2 />
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Col1({ title, description }: HeroDynamicPro) {
  return (
    <Flex justify="center" gap={4} direction={"column"} h="100%">
      <Heading
        fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
        lineHeight={1.1}
        fontWeight={600}
      >
        {title}
      </Heading>
      <Text fontSize={["md", "lg", "1xl", "2xl"]}>{description}</Text>
    </Flex>
  );
}

function Col2() {
  return (
    <Flex justify="center" gap={4} direction={"column"} h="100%">
      <Image mx="auto" src="/col2.png" h="500px" w="450px" />
    </Flex>
  );
}
