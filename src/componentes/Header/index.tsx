import { Container, LogoArea, Menu, MenuButton, MenuItem } from "./styles";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logo from "@assets/starbucksabout.png";
/* 
  Header do site
*/
export const Header = () => {
  /* Verifica se é mobile, caso for assume menu mobile */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <LogoArea>
        <Link href={"/"}>
          <Image width={40} height={40} src={logo} />
        </Link>
      </LogoArea>
      <Menu isOpen={isOpen}>
        <Link href={"/"}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href={"/flavors"}>
          <MenuItem>Sabores</MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>Sobre</MenuItem>
        </Link>
      </Menu>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={20} color={isOpen ? "black" : "green"} />
      </MenuButton>
    </Container>
  );
};
export default Header;
