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
    <Flex bg="#79E99A" top={0} position={"sticky"} height="100px">
      <Container display={"flex"} justifyContent={"space-between"} minW="8xl">
        <Heading my="auto">NanoDev</Heading>
        <ButtonG my="auto">Assinar Agora</ButtonG>
      </Container>
    </Flex>
  );
}
