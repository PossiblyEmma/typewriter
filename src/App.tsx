import styled, { createGlobalStyle } from "styled-components";

import { Display } from "./components/Display";
import { useTypeWriter } from "./hooks/useTypewriter";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. " +
    "Molestie nunc non blandit massa enim nec dui. " +
    "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. " +
    "Sed ullamcorper morbi tincidunt ornare massa eget egestas. " +
    "Dignissim enim sit amet venenatis urna cursus eget.";
  const display = useTypeWriter({ text, charactersPerSecond: 10 });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Display>{display}</Display>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html { font-size: 16px; }
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #222;
`;
export default App;
