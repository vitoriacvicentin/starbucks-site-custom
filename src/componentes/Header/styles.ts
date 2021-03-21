import styled from "styled-components";
/* Container do Header (Menu) */
export const Container = styled.header`
  height: 3rem;
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(0, 99, 65, 1) 0%,
    rgba(5, 153, 102, 1) 100%
  );
  /* Estilo do container Mobile */
  @media screen and (max-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
/* Botão do menu Mobile */
export const MenuButton = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  z-index: 4;
  @media screen and (min-width: 785px) {
    display: none;
  }
`;
export interface MenuProps {
  /**
   * Se o Menu está aberto (only Mobile)
   */
  isOpen?: boolean;
}
export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  transition: height 0.3s ease;
  /* Estilo do menu Mobile */
  @media screen and (max-width: 785px) {
    /* CSS */
    height: ${(props) => (props.isOpen ? "100%" : "0")};
    background: linear-gradient(
      0deg,
      rgba(0, 99, 65, 1) 0%,
      rgba(5, 153, 102, 1) 100%
    );
    flex-direction: column;
    position: relative;
    width: 100%;
    ${(props) => props.isOpen && "height: fit-content; padding-bottom:20px;"}
  }
`;
/* Titulos dos menus */
export const MenuItem = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  position: relative;
  &:hover {
    color: white;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.2s ease-in-out;
  }

  ::before {
    border-bottom: 1px solid;
    transform: scaleX(0);
    color: white;
  }

  :hover {
    ::before {
      transform: scaleX(1);
    }
  }
`;
