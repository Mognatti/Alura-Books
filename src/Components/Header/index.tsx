import "./Header.css";
import logo from "C:/Users/Caio Mognatti/Documents/Estudos e Livros/Alura/React/alura-books/src/img/logo.svg";

export default function Header() {
  return (
    <header className="cabecalho">
      <nav className="nav-bar">
        <ul>
          <li className="logo">
            <img src={logo} alt="logo"></img>
            <p>
              <abbr title="teu cu">Alura</abbr> Books
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
