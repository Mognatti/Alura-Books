import styled from "styled-components";
import { livros } from "../SearchBar/BaseDados";
import { ListaLivros } from "../SearchBar";

interface LatestBooksProps {
  color?: string;
}

const LatestBooksContainer = styled.section<LatestBooksProps>`
  color: ${(props) => props.color || "#fff"};
  text-align: center;
  width: 100%;
  padding: 85px 0;

  h2 {
    padding: 24px;
  }
`;

export default function LatestBooks() {
  const lastBooks = livros.filter((livro) => livro.id > livros.length - 3);

  return (
    <LatestBooksContainer color="#000">
      <h2> Últimos Lançamentos: </h2>
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
