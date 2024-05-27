import { Display } from "./components/Display";
import { createGlobalStyle } from "styled-components";
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
      <Display>{display}</Display>
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

export default App;
