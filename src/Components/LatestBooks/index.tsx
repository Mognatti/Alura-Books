import styled from "styled-components";
import { livros } from "../SearchBar/BaseDados";
import { ListaLivros } from "../SearchBar";
import { Title } from "../Title";

interface LatestBooksProps {
  color?: string;
}

const LatestBooksContainer = styled.section<LatestBooksProps>`
  color: ${(props) => props.color || "#fff"};
  text-align: center;
  margin-top: 15px;
  width: 100%;
  padding: 85px 0;
  background-color: white;

  h2 {
    margin-top: -30px;
    padding: 16px;
  }
`;

export default function LatestBooks() {
  const lastBooks = livros.filter((livro) => livro.id > livros.length - 3);

  return (
    <LatestBooksContainer color="#000">
      <Title fontSize={"36px"}> Últimos Lançamentos: </Title>
      <ListaLivros>
        {lastBooks.map((livro) => (
          <li key={livro.id}>
            <img src={livro.src} alt={`Capa de ${livro.nome}`}></img>
            <p>{livro.nome}</p>
          </li>
        ))}
      </ListaLivros>
    </LatestBooksContainer>
  );
}
