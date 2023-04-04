import Header from "./Components/Header";
import styled from "styled-components";
import SearchBar from "./Components/SearchBar";
import AddBook from "./Components/AddBook";
import LatestBooks from "./Components/LatestBooks";

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
      <LatestBooks />
    </AppContainer>
  );
}

export default App;
