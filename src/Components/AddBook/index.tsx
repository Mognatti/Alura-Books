import Input from "../Input";
import { livros } from "../SearchBar/BaseDados";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  text-align: center;
}

button {
    padding: 10px;
    margin-left: 50vw;
    cursor: pointer;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 10px;
    border: 1px solid rgb(255 255 255);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  }

  button:hover {
    color: black;
    background-color: white;
  }
`;

const AddSection = styled.section`
  display: flex;
  justify-content: center;

  h3 {
    color: white;
  }
`;

const AddBook = () => {
  const [nome, setNome] = useState("");
  const [src, setSrc] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newID = livros.length + 1;
    const newBook = { nome: nome, id: newID, src: src };
    livros.push(newBook);
  };

  return (
    <div>
      <AddSection>
        <p>
          <h3>
            Caso queria adicionar um novo livro, preencha os campos abaixo:{" "}
          </h3>
        </p>
      </AddSection>
      <StyledForm>
        <Input
          placeholder="Nome..."
          id="nameAddBook"
          onBlur={(e) => setNome(e.target.value)}
        />
        <Input
          placeholder="HTML da capa..."
          id="srcAddBook"
          onBlur={(e) => setSrc(e.target.value)}
        />
        <button onClick={handleClick} id="AddBookButton">
          Adicionar Livro
        </button>
      </StyledForm>
    </div>
  );
};

export default AddBook;
