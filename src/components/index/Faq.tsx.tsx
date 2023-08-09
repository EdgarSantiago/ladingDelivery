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
      heading: "Como posso começar a usar o aplicativo de delivery?",
      description:
        "É simples! Basta baixar nosso aplicativo, criar uma conta e seguir as instruções para configurar seus produtos e opções de entrega. Em pouco tempo, você estará pronto para receber pedidos!",
    },
    {
      heading: "Posso personalizar o design da minha loja no aplicativo?",
      description:
        "Com certeza! Nosso aplicativo de delivery permite que você personalize o design da sua loja de acordo com a sua marca. Adicione logotipos, escolha esquemas de cores e ajuste o layout para refletir a identidade da sua empresa.",
    },
    {
      heading: "Como gerencio os pedidos recebidos pelo aplicativo?",
      description:
        "O aplicativo oferece um painel de administração intuitivo onde você pode visualizar e gerenciar todos os pedidos recebidos. Acompanhe o status dos pedidos, atualize os clientes sobre o andamento e gerencie os detalhes de entrega.",
    },
    {
      heading: "Qual é a vantagem de usar as análises do aplicativo?",
      description:
        "As análises do aplicativo fornecem insights valiosos sobre o desempenho da sua loja de delivery. Acompanhe as vendas, identifique padrões de pedido e compreenda o comportamento do cliente para tomar decisões informadas e impulsionar o crescimento.",
    },
    {
      heading: "Existe suporte disponível em caso de dúvidas?",
      description:
        "Sim, estamos aqui para ajudar! Oferecemos suporte ao cliente para responder às suas perguntas e resolver quaisquer problemas. Você pode entrar em contato conosco por meio do aplicativo ou dos nossos canais de suporte.",
    },
  ];

  const accordions2 = [
    {
      heading: "Posso definir áreas de entrega específicas?",
      description:
        "Sim, você pode configurar áreas de entrega personalizadas no aplicativo. Isso permite que você atenda aos clientes em regiões específicas e otimize as operações de entrega.",
    },
    {
      heading: "Como os pagamentos são processados no aplicativo?",
      description:
        "Nosso aplicativo oferece várias opções de pagamento seguras e convenientes para os clientes. Eles podem pagar usando cartões de crédito, carteiras digitais e outros métodos populares.",
    },
    {
      heading: "Posso oferecer descontos ou promoções?",
      description:
        "Sim, você pode criar descontos e promoções especiais para incentivar os clientes a fazerem pedidos. Personalize ofertas exclusivas e defina regras para aplicar automaticamente os descontos aos produtos selecionados.",
    },
    {
      heading: "Como funciona a gestão de estoque no aplicativo?",
      description:
        "O aplicativo permite que você gerencie seu estoque de maneira eficiente. Atualize os níveis de estoque conforme os pedidos são feitos e receba alertas quando os produtos estiverem com estoque baixo.",
    },
    {
      heading: "Posso adicionar diferentes tipos de produtos ao meu cardápio?",
      description:
        "Certamente! Nosso aplicativo permite que você adicione diversos tipos de produtos ao seu cardápio, como itens individuais, combos e opções personalizadas. Isso oferece flexibilidade para atender às preferências dos clientes.",
    },
  ];

  return (
    <Flex bg="#18181B" gap={8} py={100}>
      <Container maxW="8xl">
        <Heading fontSize={["5xl", "5xl", "7xl"]} color="#79d8e9" mb={8}>
          FAQ 👽
        </Heading>
        <SimpleGrid spacing={8} columns={[1, 1, 1, 2]} color="white">
          <Accordion>
            {accordions1.map((v, i) => (
              <AccordionItem key={i} py={5}>
                <AccordionButton>
                  <Heading
                    textAlign={"start"}
                    fontSize={["xl", "1xl", "2xl", "3xl"]}
                  >
                    {v.heading}
                    <AccordionIcon />
                  </Heading>
                </AccordionButton>
                <AccordionPanel pb={4}>{v.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion>
            {accordions2.map((v, i) => (
              <AccordionItem key={i} py={5}>
                <AccordionButton>
                  <Heading
                    textAlign={"start"}
                    fontSize={["xl", "1xl", "2xl", "3xl"]}
                  >
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
