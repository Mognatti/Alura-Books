import styled from "styled-components";

const CardDiv = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;
const ImgLivro = styled.img`
  width: 150px;
`;
interface RecommendationProps {
  titulo: string;
  subtitulo?: string;
  img: string;
  descricao: string;
}

export default function RecommendationCard({
  titulo,
  subtitulo,
  descricao,
  img,
}: RecommendationProps) {
  return (
    <CardDiv>
      <h3>{titulo}</h3>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Descricao>{descricao}</Descricao>
      <ImgLivro src={img} alt="Imagem do livro" />
      <Button>Saiba Mais</Button>
    </CardDiv>
  );
}
