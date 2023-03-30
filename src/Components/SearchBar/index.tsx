import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./BaseDados";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ListaLivros = styled.ul`
  margin-top: 20px;
`;

export default function SearchBar() {
  const [busca, setBusca] = useState("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  return (
    <SectionContainer>
      <label htmlFor="searchInput">
        <Input
          type="text"
          id="searchInput"
          placeholder="Buscar livro..."
          value={busca}
          onBlur={handleBlur}
        ></Input>
      </label>
      <ListaLivros>
        {livros.map((livro) => (
          <li key={livro.nome}>
            <img src={livro.src} alt={livro.nome}></img>
            {livro.nome}
          </li>
        ))}
      </ListaLivros>
    </SectionContainer>
  );
}
