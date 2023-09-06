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
    <Box pb={100} height="100%" minH="60vh" bg="#79d8e9">
      <Container maxW="8xl" h="100%">
        <SimpleGrid columns={[1, 1, 1, 2]} h="100%" gap={4}>
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
      <Text fontSize={["lg", "xl", "1xl", "2xl"]}>PLANO INICIAL</Text>
      <Heading
        fontSize={["3xl", "4xl", "5xl", "6xl"]}
        lineHeight={1.1}
        fontWeight={600}
      >
        O Futuro das Entregas está Aqui
      </Heading>
      <Text fontSize={["lg", "xl", "1xl", "2xl"]}>
        Potencialize o seu negócio de entregas com nosso aplicativo de última
        geração. O Plano Inicial oferece uma configuração simples e intuitiva,
        perfeito para promover seus produtos através das redes sociais.
      </Text>

      <ButtonG mx="auto" w="80%" boxShadow={"4px 4px 0px #111111"}>
        Começar Agora
      </ButtonG>

      <chakra.span mx="auto" textAlign={"center"}>
        Experimente nosso aplicativo gratuitamente - Sem necessidade de cartão
        de crédito.
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
