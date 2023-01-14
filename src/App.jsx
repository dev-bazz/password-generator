import { useCalc } from "./calculator";

// JSX Component
function App() {
  const { calcMethods } = useCalc()
  console.log(calcMethods.genSmallCaps())
  return (
    <div className="App">
    <h1>Password Generator</h1>
    </div>
  );
}

export default App;
// Hello
