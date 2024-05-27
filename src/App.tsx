import { useTypeWriter } from "./hooks/useTypewriter";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. " +
    "Molestie nunc non blandit massa enim nec dui. " +
    "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. " +
    "Sed ullamcorper morbi tincidunt ornare massa eget egestas. " +
    "Dignissim enim sit amet venenatis urna cursus eget. " +
    "Morbi tristique senectus et netus et malesuada fames ac. " +
    "Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. " +
    "Lectus sit amet est placerat. " +
    "Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.";
  const display = useTypeWriter({ text, charactersPerSecond: 5 });

  return display;
}

export default App;
