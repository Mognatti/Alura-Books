import Header from "./Components/Header";
import styled from "styled-components";
import SearchBar from "./Components/SearchBar";
import AddBook from "./Components/AddBook";
import LatestBooks from "./Components/LatestBooks";
import RecommendationCard from "./Components/RecommendationCard";

const AppContainer = styled.section`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
      <AddBook />
      <RecommendationCard
        titulo="Novo Livro"
        subtitulo="Este é um livro totalmente novo!"
        descricao="Definitivamente é um dos livros já feitos!"
        img="https://i.pinimg.com/474x/bc/98/6c/bc986c22d09662d26d5fe228c4c57e59.jpg"
      />
      <LatestBooks />
    </AppContainer>
  );
}

export default App;
