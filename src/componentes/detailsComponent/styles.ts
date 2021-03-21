import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5rem;
  img {
    width: auto;
    float: left;
    background: linear-gradient(
      0deg,
      rgba(0, 99, 65, 1) 0%,
      rgba(5, 153, 102, 1) 100%
    );
    border-radius: 50%;
  }
  .div-right {
    margin-left: 10rem;
    width: 500px;
    text-align: center;
    h1 {
      padding: 10px;
      font-weight: bold;
      text-decoration: underline;
    }
    p {
      padding: 20px;
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
    margin: 10px 0;
    img {
      margin-top: 5rem;
      width: auto;
      height: 250px;
    }
  }
`;
