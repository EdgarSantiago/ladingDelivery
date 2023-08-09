import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import ButtonG from "../global/ButtonG";
import Marquee from "react-fast-marquee";

export default function InfinitySwiper() {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      gap={8}
      height="100vh"
      justifyContent={"center"}
      align={"center"}
    >
      <SwiperZ />
      <Heading fontSize={"3xl"} fontWeight={"thin"}>
        Whether you want to start selling or test drive an idea, Shopify has all
        the tools you need to get going.
      </Heading>
      <ButtonG w="50%">GET STARTED FREE</ButtonG>
    </Flex>
  );
}

const SwiperZ = () => {
  const coolTexts = [
    {
      text: "SELL FOR $5/MO 😎",
      textColor: "#c4e6ce",
    },
    {
      text: "SELL FOR $5/MO 🤑",
      textColor: "#c3eccf",
    },
    {
      text: "SELL FOR $5/MO 🚀",
      textColor: "#bce5c8",
    },
    {
      text: "SELL FOR $5/MO 💰",
      textColor: "#b3e1c1",
    },
    {
      text: "SELL FOR $5/MO 🔥",
      textColor: "#a9e0ba",
    },
    {
      text: "SELL FOR $5/MO 👍",
      textColor: "#9adbaf",
    },
    {
      text: "SELL FOR $5/MO 🌟",
      textColor: "#9adbaf",
    },
    {
      text: "SELL FOR $5/MO 💎",
      textColor: "#91deaa",
    },
    {
      text: "SELL FOR $5/MO 🌈",
      textColor: "#85dca1",
    },
    {
      text: "SELL FOR $5/MO 🎉",
      textColor: "#7ce39d",
    },
    {
      text: "SELL FOR $5/MO 👏",
      textColor: "#79E99A",
    },
  ];

  return (
    <Marquee
      delay={0}
      loop={0}
      speed={100}
      autoFill={false}
      gradientWidth={200}
      style={{ minWidth: "100%" }}
    >
      {coolTexts.map((v, y) => (
        <Box bg="red" h="50vh" w="200px">
          <Text>teste</Text>
        </Box>
      ))}
    </Marquee>
  );
};
