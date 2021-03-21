import Carousel from "@src/componentes/Carousel";
import { MainContent } from "../styles/pages/Home";
import NextHead from "next/head";
/* 
  Pagina Inicial
*/
const Home = () => {
  return (
    <>
      <NextHead>
        <title>Home</title>
      </NextHead>
      <MainContent>
        <Carousel />
      </MainContent>
    </>
  );
};

export default Home;
