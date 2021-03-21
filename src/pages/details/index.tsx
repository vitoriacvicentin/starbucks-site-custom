import Details from "@src/componentes/detailsComponent";
import NextHead from "next/head";
/* 
  Pagina Inicial
*/
const Home = () => {
  return (
    <>
      <NextHead>
        <title>Detalhes</title>
      </NextHead>
      <Details />
    </>
  );
};

export default Home;
