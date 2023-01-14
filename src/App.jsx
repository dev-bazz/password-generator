import { useCalc } from "./calculator";
import "./_App.scss";

// JSX Component
function App() {
  const { calcMethods } = useCalc()
  console.log(calcMethods.genSmallCaps())
  return (
    <main className="App">
      <nav className="navBar">
        <p className="logo">Clement <span className="dim">Bazuaye</span></p>
      </nav>
      <div className="generator">
        <h1 className="title" >Password Generator</h1>

        <section className="container ">
          <p>Upper Section</p>
        </section>

        <section className="container ">
          <p>Lower Section</p>
        </section>
      </div>
    </main>
  );
}

export default App;
// Hello
