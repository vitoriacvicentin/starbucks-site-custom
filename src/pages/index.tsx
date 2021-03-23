import Carousel from "@src/componentes/Carousel";
import { MainContent } from "../styles/pages/Home";
import NextHead from "next/head";
import { motion } from "framer-motion";
/* 
  Pagina Inicial
*/
const Home = () => {
  return (
    <>
     <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <NextHead>
        <title>Home</title>
      </NextHead>
      <MainContent>
        <Carousel />
      </MainContent>
      </motion.div>
    </>
  );
};

export default Home;
