import Carousel from "@src/componentes/Carousel";
import Header from "@src/componentes/Header";
import { MainContent } from "../styles/pages/Home";
/* 
  Pagina Inicial
*/
const Home = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Carousel />
      </MainContent>
    </>
  );
};

export default Home;
