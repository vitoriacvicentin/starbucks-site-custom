import { Container } from "@styles/pages/About";
import starbucksabout from "@assets/starbucksabout.png";
import Image from "next/image";
import NextHead from "next/head";
/* 
  Pagina Inicial
*/
export const About = () => {
  return (
    <>
      <NextHead>
        <title>Sobre</title>
      </NextHead>
      <Container>
        <Image src={starbucksabout} width={560} height={460} alt="Simbolo da starbucks" />
        <div className="div-right">
          <h1>A Starbucks</h1>
          <p>Espere mais do que simplesmente café</p>
          <p>
            Dizer que a Starbucks compra e torra cafés de alta qualidade é bem
            verdadeiro. Essa é a essência do que eles fazem - mas está longe de
            ser a história completa.
          </p>
          <p>
            As cafeterias Starbucks se tornaram uma referência para os amantes
            do café em qualquer lugar do mundo. E por que eles insistem em
            visitar a Starbucks? Porque eles sabem que podem contar com um
            serviço verdadeiro, uma atmosfera convidativa e uma excelente xícara
            de café, preparado com excelência, sempre.
          </p>
          <p>
            A Starbucks não é apenas uma fornecedora apaixonada por café, mas
            também de tudo o mais que acompanha uma experiência completa e
            recompensadora ao se tomar um café. Ela também oferece uma seleção
            de chás especiais, doces finos e outros itens deliciosos para
            agradar o paladar. E a música que você ouve na cafeteria foi
            escolhida especialmente pela qualidade e relevância.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
