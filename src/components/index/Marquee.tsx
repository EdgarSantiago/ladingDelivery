import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const MarqueeZ = () => {
  const coolTexts = [
    {
      text: "SELL FOR $5/MO 😎",
      textColor: "#c4e1e6",
    },
    {
      text: "SELL FOR $5/MO 🤑",
      textColor: "#c3e0ec",
    },
    {
      text: "SELL FOR $5/MO 🚀",
      textColor: "#bcdbe5",
    },
    {
      text: "SELL FOR $5/MO 💰",
      textColor: "#b3d8e1",
    },
    {
      text: "SELL FOR $5/MO 🔥",
      textColor: "#a9d6e0",
    },
    {
      text: "SELL FOR $5/MO 👍",
      textColor: "#9acddb",
    },
    {
      text: "SELL FOR $5/MO 🌟",
      textColor: "#9acedb",
    },
    {
      text: "SELL FOR $5/MO 💎",
      textColor: "#91cfde",
    },
    {
      text: "SELL FOR $5/MO 🌈",
      textColor: "#85c8dc",
    },
    {
      text: "SELL FOR $5/MO 🎉",
      textColor: "#7cc7e3",
    },
    {
      text: "SELL FOR $5/MO 👏",
      textColor: "#79d8e9",
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
        {coolTexts.map((v, i) => (
          <Heading
            color={v.textColor}
            fontSize="3xl"
            mx="5"
            key={i}
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
