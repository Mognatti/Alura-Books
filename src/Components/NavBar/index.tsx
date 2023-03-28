import "./NavBar.css";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const NavBar = () => {
  const NavItens: string[] = ["Categorias", "Minha Estante", "Favoritos"];
  const icons: string[] = [perfil, sacola];

  return (
    <>
      <ul className="CenterPages">
        {NavItens.map((item) => {
          return (
            <li key={item} className="centerPage">
              {item}
            </li>
          );
        })}
      </ul>
      <ul className="Profile-Cart">
        {icons.map((icon) => (
          <img
            src={icon}
            alt={`ícone de ${icon}`}
            key={icon}
            className="icone"
          ></img>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
