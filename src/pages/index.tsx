import Layout from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import Essentials from "@/components/index/Essentials";
import Faq from "@/components/index/Faq.tsx";
import InfinitySwiper from "@/components/index/InfinitySwiper";
import Navbar from "@/components/index/Navbar";
import Marquee from "@/components/index/Marquee";
import HeroDynamic from "@/components/index/HerosDynamic";
import Footer from "@/components/index/Footer";

export default function Home() {
  const herosDynamics = [
    {
      heading: "Pule direto para as vendas 🚀",
      description:
        "Com nosso aplicativo de delivery, você pode começar a receber pedidos em poucos minutos. Configure seus produtos e serviços rapidamente e esteja pronto para atender seus clientes.",
      reverse: false,
    },
    {
      heading: "Entregas Simplificadas 💼",
      description:
        "Compartilhe facilmente seus produtos de delivery nas redes sociais, permitindo que seus clientes façam pedidos de forma rápida e conveniente, diretamente pelo aplicativo.",
      reverse: true,
    },
    {
      heading: "Aproveite a Visibilidade nas Redes Sociais 📢",
      description:
        "Monetize seus seguidores nas redes sociais. Promova seus produtos de delivery por meio de posts e stories, direcionando seus clientes para o app e aumentando suas vendas.",
      reverse: false,
    },
    {
      heading: "Cresça com Seu Negócio 🌱",
      description:
        "À medida que seu negócio de delivery prospera, nosso aplicativo cresce com você. Atualize recursos e capacidades à medida que você expande sua base de clientes e otimize suas operações de entrega.",
      reverse: true,
    },
  ];

  return (
    <Layout title="Início">
      <Navbar />
      <Hero />
      <Marquee />
      <Box pt={10} className="heros-grandient">
        {herosDynamics.map((hero, i) => (
          <HeroDynamic
            key={i}
            title={hero.heading}
            description={hero.description}
            reverseColumns={hero.reverse}
          />
        ))}
        <Essentials />
      </Box>
      <Faq />
      <InfinitySwiper />
      <Footer />
    </Layout>
  );
}
