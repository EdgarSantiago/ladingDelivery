import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const MarqueeZ = () => {
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
    <Box bg="#111111" py={8}>
      <Marquee
        delay={0}
        loop={0}
        speed={100}
        autoFill={true}
        gradientWidth={200}
        style={{ minWidth: "100%" }}
      >
        {coolTexts.map((v, y) => (
          <Heading
            color={v.textColor}
            fontSize="3xl"
            mx="5"
            key={y}
            minW="100%"
          >
            {v.text}
          </Heading>
        ))}
      </Marquee>
    </Box>
  );
};

export default MarqueeZ;
