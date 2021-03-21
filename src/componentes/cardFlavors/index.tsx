import blondeexpresso from "@assets/blondeexpresso.png";
import cafeamericano from "@assets/cafeamericano.png";
import cappucino from "@assets/cappucino.png";
import caramelmacchiato from "@assets/caramelmacchiato.png";
import expresso from "@assets/expresso.png";
import lattemacchiato from "@assets/lattemacchiato.png";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { FaSignLanguage } from "react-icons/fa";
import { Button, Container } from "./styles";
/* Componente de card, o array favlors amarzena os sabores de café para mapear
    e passar para o card de acordo com seu ID
*/
const favlors = [
  { id: 1, name: "Café Americano", image: `${cafeamericano}` },
  { id: 2, name: "Latte Macchiato", image: `${lattemacchiato}` },
  { id: 3, name: "Blonde Expresso", image: `${blondeexpresso}` },
  { id: 4, name: "Cappucino", image: `${cappucino}` },
  { id: 5, name: "Café Expresso", image: `${expresso}` },
  { id: 6, name: "Caramel Macchiato", image: `${caramelmacchiato}` },
];

export const CardFlavors = () => {
  /* Recebe o array */
  const newflavors = favlors;
  return (
    <>
      <Container>
        {/* Mapeamento do array, slug é o novo array mapeado */}
        {newflavors.map((slug) => (
          <Card key={slug.id} className="card">
            <Card.Img variant="top" src={slug.image} />
            <Card.Body>
              <Card.Title>{slug?.name}</Card.Title>
              <Link
                href={{
                  pathname: "/details",
                  query: { id: slug.id, name: slug.name },
                }}
                as={slug?.name}
              >
                <Button>Detalhes</Button>
              </Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Todos os direitos reservados a Starbucks
              </small>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </>
  );
};
export default CardFlavors;
