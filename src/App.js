import styled from "styled-components";

function App() {
  return (
    <Main>
      <div>
        <p>Ola eu sou sua loja </p>       
      </div>
    </Main>
  );
}

export default App;

r

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  p{
    font-size: larger;
  }
`;