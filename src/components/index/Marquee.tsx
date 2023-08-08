import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const MarqueeZ = () => {
  const texts = [
    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",

    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",
    "SELL FOR $5/MO",
    "👌",
  ];
  return (
    <Marquee style={{ textAlign: "center" }} autoFill={true}>
      {texts.map((v, y) => (
        <Heading fontSize="2xl" key={y}>
          {v}
        </Heading>
      ))}
    </Marquee>
  );
};

export default MarqueeZ;
