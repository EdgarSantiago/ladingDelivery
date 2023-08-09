import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ButtonG from "../global/ButtonG";

export default function Navbar() {
  return (
    <Flex
      zIndex={9999}
      bg="#79d8e9"
      top={0}
      position={"sticky"}
      height={["80px", "90px", "100px"]}
    >
      <Container display={"flex"} justifyContent={"space-between"} maxW="8xl">
        <Heading my="auto" fontSize={["2xl", "3xl", "4xl", "5xl"]}>
          Brand
        </Heading>
        <ButtonG my="auto">Assinar Agora</ButtonG>
      </Container>
    </Flex>
  );
}
