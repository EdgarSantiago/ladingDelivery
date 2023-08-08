import Layout from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import Essentials from "@/components/index/Essentials";
import Faq from "@/components/index/Faq.tsx";
import InfinitySwiper from "@/components/index/InfinitySwiper";
import Navbar from "@/components/index/Navbar";
import Marquee from "@/components/index/Marquee";
import HeroDynamic from "@/components/index/HerosDynamic";

export default function Home() {
  const herosDynamics = [
    {
      heading: "Jump straight to selling 🦘",
      description:
        "With Starter, your store is ready to go in just a few clicks. All you need is an image and a slick description of the product or service you’re selling. It’s that simple!",
      reverse: false,
    },
    {
      heading: "Selling powered for social 💸",
      description:
        "Easily share products on Instagram, WhatsApp, or anywhere else—providing customers quick and reliable transactions with Shopify checkout.",
      reverse: true,
    },
    {
      heading: "Monetize your link in bio 🤑",
      description:
        "Want more ways to sell on social? Create a Linkpop page in minutes that drives followers to your top products and content, all via your bio link.",
      reverse: false,
    },
    {
      heading: "Grow as you go 💰",
      description:
        "From hashtags to cash bags, Shopify is here with you. Start small and upgrade your plan whenever you’re ready to unlock new features and selling capabilities. Need help developing your brand? Explore Shopify’s free tools to help you grow it.",
      reverse: true,
    },
  ];
  return (
    <Layout title="Início">
      <Navbar />
      <Hero />
      <Marquee />
      <Box className="heros-grandient">
        {herosDynamics.map((hero, i) => (
          <HeroDynamic
            key={i}
            title={hero.heading}
            description={hero.description}
            reverseColumns={hero.reverse}
          />
        ))}
      </Box>
      <Essentials />
      <Faq />
      <InfinitySwiper />
    </Layout>
  );
}
