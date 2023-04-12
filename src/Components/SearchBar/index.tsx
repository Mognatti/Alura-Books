import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { livros, LivroProps, GetBooks } from "./BaseDados";

const SectionContainer = styled.section`
  color: #fff;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 32px 0;
`;
export const ListaLivros = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  li {
    width: 200px;
  }
  img {
    width: 100px;
  }
`;

export default function SearchBar() {
  const [search, setSearch] = useState<LivroProps[]>([]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const searchvalue = e.target.value.toLowerCase();
    const searchResponse = livros.filter((livro) =>
      livro.nome.toLowerCase().includes(searchvalue)
    );
    if (searchvalue === "") {
      setSearch([]);
    } else {
      setSearch(searchResponse);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    GetBooks();
  };

  return (
    <SectionContainer>
      <label htmlFor="searchInput">
        <Input
          type="text"
          id="searchInput"
          placeholder="Buscar livro..."
          onBlur={handleBlur}
        ></Input>
      </label>
      <ListaLivros>
        {search.map((livro) => (
          <li key={livro.id}>
            <img src={livro.src} alt={`Imagem de ${livro.nome}`}></img>
            <p>{livro.nome}</p>
          </li>
        ))}
      </ListaLivros>
      <p>
        <button onClick={handleClick}>Livros da Lista: </button>
      </p>
    </SectionContainer>
  );
}
