import CardFlavors from "@src/componentes/cardFlavors";
import NextHead from "next/head";
/* Pagina do sabores */
export const Flavors = () => {
  return (
    <>
      <NextHead>
        <title>Sabores</title>
      </NextHead>
      <CardFlavors />
    </>
  );
};
export default Flavors;
