import CardFlavors from "@src/componentes/cardFlavors";
import { motion } from "framer-motion";
import NextHead from "next/head";
/* Pagina do sabores */
export const Flavors = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NextHead>
          <title>Sabores</title>
        </NextHead>
        <CardFlavors />
      </motion.div>
    </>
  );
};
export default Flavors;
