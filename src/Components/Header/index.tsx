import NavBar from "../NavBar";
import Logo from "../Logo";
import logoImg from "C:/Users/Caio Mognatti/Documents/Estudos e Livros/Alura/React/alura-books/src/img/logo.svg";
import styled from "styled-components";
import NavBarIcons from "../NavBarIcons";

const HeaderStyle = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo imagem={logoImg}></Logo>
      <NavBar />
      <NavBarIcons />
    </HeaderStyle>
  );
};

export default Header;
