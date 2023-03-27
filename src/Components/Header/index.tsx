import "./Header.css";

interface HeaderProps {
  imagem: string;
}

const Header = ({ imagem }: HeaderProps) => {
  return (
    <header className="cabecalho">
      <nav className="nav-bar">
        <ul>
          <li className="logo">
            <img src={imagem} alt="logo"></img>
            <p>
              <strong>Alura</strong> Books
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
