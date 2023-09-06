import * as React from "react";
import { Container, Text, SimpleGrid, Box, Heading } from "@chakra-ui/react";

interface StatData {
  id: number;
  label: string;
  score: string;
}

const statData = [
  {
    id: 1,
    label: "📦 Gerenciamento de Pedidos",
    score:
      "Receba, gerencie e cumpra pedidos, tudo de um único lugar em seu painel de administração.",
  },
  {
    id: 2,
    label: "🚀 Análises",
    score:
      "Veja métricas-chave de desempenho para entender suas vendas e clientes.",
  },
  {
    id: 3,
    label: "🤝 Suporte ao Cliente",
    score:
      "Dúvidas? Obtenha o suporte necessário para iniciar, administrar e expandir seu negócio.",
  },
];

const Essentials = () => {
  return (
    <Box bg="white">
      <Container maxW="8xl" p={{ base: 5, md: 20 }}>
        <Heading textAlign={"center"}>Elementos fundamentais.</Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 1, lg: 3 }}
          spacing={10}
          mt={5}
          mb={5}
        >
          {statData.map((data) => (
            <Box
              className="shadow-color"
              bg="white"
              key={data.id}
              p={5}
              rounded="md"
              border="4px solid #111111"
            >
              <Text fontWeight="extrabold" fontSize="x-large">
                {data.label}
              </Text>
              <Text>{data.score}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Essentials;
