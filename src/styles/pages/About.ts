import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  .div-right {
    margin-left: 4rem;
    width: 45%;
    text-align: center;
    border-radius: 1%;
    h1 {
      padding: 10px;
      font-weight: bold;
      text-decoration: underline;
    }
    p {
      text-align: justify;
    }
    @media (max-width: 785px) {
      margin-left: 0;
      width: auto;
      p {
        text-align: center;
        padding: 0;
      }
    }
  }
  @media (max-width: 785px) {
    margin-top: 5rem;
    flex-direction: column;
    height: auto;
    gap: 0;
    margin: 10px 10px;
    img {
      margin-top: 5rem;
      width: auto;
      height: 250px;
    }
  }
`;
