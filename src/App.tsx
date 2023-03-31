import Header from "./Components/Header";
import styled from "styled-components";
import SearchBar from "./Components/SearchBar";

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
    </AppContainer>
  );
}

export default App;
