import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ChakraProvider>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
