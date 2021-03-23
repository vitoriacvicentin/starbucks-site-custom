import Details from "@src/componentes/detailsComponent";
import { motion } from "framer-motion";
import NextHead from "next/head";
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
          <title>Detalhes</title>
        </NextHead>
        <Details />
      </motion.div>
    </>
  );
};

export default Home;
