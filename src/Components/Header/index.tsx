import NavBar from "../NavBar";
import Logo from "../Logo";
import logoImg from "C:/Users/Caio Mognatti/Documents/Estudos e Livros/Alura/React/alura-books/src/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Logo imagem={logoImg}></Logo>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
