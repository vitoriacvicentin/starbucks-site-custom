import Example from "@src/componentes/Carousel";
import Header from "@src/componentes/Header";
import { MainContent, MainText, Section } from "../styles/pages/Home";
const Home = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Example />
      </MainContent>
    </>
  );
};

export default Home;
