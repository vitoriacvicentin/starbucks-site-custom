import styled from "styled-components";
/* Container da Pagina e cards, classe card ajusta os cards */
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  text-align: center;
  .card {
    margin: 10px 10px;
  }
  @media (max-width: 785px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    margin: 60px 0;
    .card {
      width: auto;
    }
  }
`;
/* Botão de detalhes */
export const Button = styled.button`
  background-image: linear-gradient(
    to right,
    rgba(0, 99, 65, 1) 0%,
    #001510 51%,
    rgba(5, 153, 102, 1) 100%
  );
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
