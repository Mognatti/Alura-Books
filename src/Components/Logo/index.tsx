import styled from "styled-components";

const LogoStyle = styled.div`
  display: flex;
  font-size: 30px;
  .logo-img {
    margin-right: 10px;
  }
`;

interface LogoProps {
  imagem: string;
}

const logo = ({ imagem }: LogoProps) => {
  return (
    <LogoStyle>
      <img src={imagem} alt="logo" className="logo-img"></img>
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoStyle>
  );
};

export default logo;
