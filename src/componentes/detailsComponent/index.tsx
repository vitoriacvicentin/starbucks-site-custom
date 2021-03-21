import blondeexpressodetails from "@assets/blondeexpressodetails.png";
import cafeamericanodetails from "@assets/cafeamericanodetails.png";
import cappucinodetails from "@assets/cappucinodetails.png";
import caramelmacchiatodetails from "@assets/caramelmacchiatodetails.png";
import expressodetails from "@assets/expressodetails.png";
import lattemacchiatodetails from "@assets/lattemacchiatodetails.png";
import Image from "next/image";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { Container } from "./styles";

const flavorsdetails = [
  {
    id: 1,
    desc:
      "Shots de café expresso com cobertura de água quente criam uma leve camada de creme culminando nesta xícara maravilhosamente rica com profundidade e nuances.Dica profissional: para um impulso adicional, peça ao seu barista para tentar fazer isso com uma dose extra.",
    image: `${cafeamericanodetails}`,
  },
  {
    id: 2,
    desc:
      "Latte Macchiato apresenta leite integral vaporizado que é perfeitamente aerado e espalhado, criando uma espuma densa que lembra merengue. A bebida é então marcada por tiros de expresso completo derramados lentamente, criando um ponto de café expresso exclusivo. Os baristas da Starbucks usarão essa técnica cuidadosamente elaborada para extrair um sabor intensamente ousado e torrado que destaca o expresso Starbucks na bebida.",
    image: `${lattemacchiatodetails}`,
  },
  {
    id: 3,
    desc:
      "Blonde Expresso é o resultado de 5 décadas procurando, misturando e torrando café que nos levaram a um espresso ousadamente suave. Um blend de grãos da América Latina em um torra que traz notas doces e vibrantes. Suave e Equilibrado ele destaca a doçura do leite, tornando as bebidas clássicas do café espresso mais suaves e sem amargor.",
    image: `${blondeexpressodetails}`,
  },
  {
    id: 4,
    desc:
      "Um expresso escuro e rico está à espreita sob uma camada lisa e esticada de espessa espuma de leite. Uma alquimia de arte e artesanato barista.",
    image: `${cappucinodetails}`,
  },
  {
    id: 5,
    desc:
      "Nosso Café expresso suave e exclusivo com sabor rico e doçura de caramelo está no centro de tudo o que fazemos.",
    image: `${expressodetails}`,
  },
  {
    id: 6,
    desc:
      "Leite recém-cozinhado com xarope de baunilha marcado com café expresso e coberto com um fio de caramelo para um final tão doce.",
    image: `${caramelmacchiatodetails}`,
  },
];
export const Details = () => {
  const router = useRouter();
  const id = router.query.id;
  const title = router.query.name;
  const newflavorsdetails = flavorsdetails;

  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
      {newflavorsdetails.map((details) => (
        <div>
          {details.id == id && (
            <ul key={id}>
              <Container>
                <div>
                  <Image src={details.image} width={400} height={400} />
                </div>
                <div className="div-right">
                  <h1>{title}</h1>
                  <p>{details.desc}</p>
                </div>
              </Container>
            </ul>
          )}
        </div>
      ))}
    </>
  );
};
export default Details;
