import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
      className="heros-grandient"
      textAlign={"center"}
    >
      <SwiperZ />
      <Heading px={2} fontSize={["md", "lg", "2xl", "3xl"]} fontWeight={"thin"}>
        Whether you want to start selling or test drive an idea, Shopify has all
        the tools you need to get going.
      </Heading>
      <ButtonG w={["80%", "70%", "60%", "50%"]}>GET STARTED FREE</ButtonG>
    </Flex>
  );
}

const SwiperZ = () => {
  const coolTexts = [
    {
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExejVjN3JscDRoZmpsdDNuaHU0b2t0bXFpcDFpeGJsc3hwdTE5N2YyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xePyGsKplOK5dHG/giphy.gif",
    },
    {
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGkzMGd3anJmNzFkYTl3ZnFnMnVjc3lnMGc5ZDFkeGszY29jbnZrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btR4w5GK8CTpNOU/giphy.gif",
    },
    {
      src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZ6azV6dXltZDhpM2wzZnIycXNscTAyY3QybWpiOHp0eHpzdDVlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TsTfcZAHsP3jBbr0JV/giphy.gif",
    },
    {
      src: "https://media3.giphy.com/media/R41OuGtgoPhrWOX9dO/giphy.gif?cid=ecf05e474ei5na72wb7fg4vnq3z7tjo28ngrosdcf09h1tpn&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      src: "https://media3.giphy.com/media/XbgtclqMhrlx7PozAs/giphy.gif?cid=ecf05e47u4s8eikt4h1d05mjarw9vkmkqx8jj2xzju0vje8d&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      src: "https://media3.giphy.com/media/JVNOiUgDsyS34Jkj5q/giphy.gif?cid=ecf05e47if6pfpm78vtpj5f3ycdj19809raesuhzz0rj5jqx&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
  ];

  return (
    <Marquee
      delay={0}
      loop={0}
      speed={100}
      autoFill={false}
      gradientWidth={200}
      style={{ minWidth: "100%", paddingBottom: 20, paddingTop: 20 }}
    >
      {coolTexts.map((v, y) => (
        <Image
          border="4px"
          className="shadow-color-swiper"
          src={v.src}
          objectFit={"cover"}
          h="50vh"
          w="250px"
          mx={[5, 6, 7, 8, 10]}
          rounded="md"
        />
      ))}
    </Marquee>
  );
};
