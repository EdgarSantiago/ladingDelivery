import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Faq() {
  const accordions1 = [
    {
      heading: "Jump straight to selling 🦘",
      description:
        "With Starter, your store is ready to go in just a few clicks. All you need is an image and a slick description of the product or service you’re selling. It’s that simple!",
    },
    {
      heading: "Selling powered for social 💸",
      description:
        "Easily share products on Instagram, WhatsApp, or anywhere else—providing customers quick and reliable transactions with Shopify checkout.",
    },
    {
      heading: "Monetize your link in bio 🤑",
      description:
        "Want more ways to sell on social? Create a Linkpop page in minutes that drives followers to your top products and content, all via your bio link.",
    },
    {
      heading: "Grow as you go 💰",
      description:
        "From hashtags to cash bags, Shopify is here with you. Start small and upgrade your plan whenever you’re ready to unlock new features and selling capabilities. Need help developing your brand? Explore Shopify’s free tools to help you grow it.",
    },
  ];

  return (
    <Flex bg="#18181B" gap={8} py={100}>
      <Container minW="8xl">
        <Heading fontSize="7xl" color="#4BFE85" mb={8}>
          FAQ 👽
        </Heading>
        <SimpleGrid spacing={8} columns={2} color="white">
          <Accordion>
            {accordions1.map((v, i) => (
              <AccordionItem key={i} py={5}>
                <AccordionButton>
                  <Heading fontSize="3xl">
                    {v.heading}
                    <AccordionIcon />
                  </Heading>
                </AccordionButton>
                <AccordionPanel pb={4}>{v.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion>
            {accordions1.map((v, i) => (
              <AccordionItem key={i} py={5}>
                <AccordionButton>
                  <Heading fontSize="3xl">
                    {v.heading}
                    <AccordionIcon />
                  </Heading>
                </AccordionButton>
                <AccordionPanel pb={4}>{v.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
