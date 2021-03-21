import cafeamericano from "@assets/cafeamericano.png";
import lattemacchiato from "@assets/lattemacchiato.png";
import blondeespresso from "@assets/blondeespresso.png";
import cappucino from "@assets/cappucino.png";
import espresso from "@assets/espresso.png";
import caramelmacchiato from "@assets/caramelmacchiato.png";
import { Container, Button } from "./styles";
import { Card } from "react-bootstrap";
/* Componente de card, o array favlors amarzena os sabores de café para mapear
    e passar para o card de acordo com seu ID
*/
const favlors = [
  { id: 1, name: "Café Americano", image: `${cafeamericano}` },
  { id: 2, name: "Latte Macchiato", image: `${lattemacchiato}` },
  { id: 3, name: "Blonde Espresso", image: `${blondeespresso}` },
  { id: 4, name: "Cappucino", image: `${cappucino}` },
  { id: 5, name: "Café Espresso", image: `${espresso}` },
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
              <Button>Detalhes</Button>
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
