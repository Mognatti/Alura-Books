import styled from "styled-components";

const NavBarStyle = styled.ul`
  display: flex;

  .centerPage {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
  }

  li {
    list-style: none;
  }
`;

const NavBar = () => {
  const NavItens: string[] = ["Categorias", "Minha Estante", "Favoritos"];

  return (
    <NavBarStyle>
      {NavItens.map((item) => {
        return (
          <li key={item} className="centerPage">
            {item}
          </li>
        );
      })}
    </NavBarStyle>
  );
};

export default NavBar;
