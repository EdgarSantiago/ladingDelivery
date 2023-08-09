import * as React from "react";
import { Container, Text, SimpleGrid, Box, Heading } from "@chakra-ui/react";

interface StatData {
  id: number;
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "📦 Order management",
    score:
      "Receive, manage, and fulfill orders—all from a single place within your admin.",
  },
  {
    id: 2,
    label: "🚀 Analytics",
    score:
      "See key performance metrics to learn about your sales and customers.",
  },
  {
    id: 3,
    label: "🤝 Customer support",
    score:
      "Questions? Get the support you need to start, run, and grow your business.",
  },
];

const Essentials = () => {
  return (
    <Container maxW="8xl" p={{ base: 5, md: 10 }}>
      <Heading textAlign={"center"}>Find all the essentials</Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        mt={12}
        mb={4}
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
  );
};

export default Essentials;
