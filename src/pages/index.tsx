import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import Heros from "@/components/index/Heros";
import Essentials from "@/components/index/Essentials";
import Faq from "@/components/index/Faq.tsx";
import InfinitySwiper from "@/components/index/InfinitySwiper";
import Navbar from "@/components/index/Navbar";
import Marquee from "@/components/index/Marquee";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Marquee />
      <Heros />
      <Essentials />
      <Faq />
      <InfinitySwiper />
    </Layout>
  );
}
