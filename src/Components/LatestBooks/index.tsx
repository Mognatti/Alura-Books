import styled from "styled-components";
import { livros } from "../SearchBar/BaseDados";
import { ListaLivros } from "../SearchBar";

const LatestBooksContainer = styled.section`
  color: #fff;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 85px 0;

  h2 {
    padding: 24px;
  }
`;

export default function LatestBooks() {
  const lastBooks = livros.filter((livro) => livro.id > livros.length - 3);

  return (
    <LatestBooksContainer>
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
