import styled from "styled-components";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const NavBarIconsStyle = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icons: string[] = [perfil, sacola];

export default function NavBarIcons() {
  return (
    <NavBarIconsStyle>
      {icons.map((icon) => (
        <Icone key={icon}>
          <img src={icon} alt={`ícone de ${icon}`} className="icone"></img>
        </Icone>
      ))}
    </NavBarIconsStyle>
  );
}
