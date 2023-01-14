import { Icons } from "./asset";
import { useGenerator } from "./calculator";
import "./_App.scss";

// JSX Component
function App() {
  const { copy } = useGenerator()

  return (
    <main className="App">

      <nav className="navBar">
        <p className="logo">Clement <span className="dim">Bazuaye</span></p>
      </nav>

      <div className="generator">
        <h1 className="title" >Password Generator</h1>

        <section className="container ">
          <div className="container-flex">
            <output>86AqmCgIfl9a5SD</output>
            <Icons refIcon={copy}
              click={() => {
                console.log("This is your Icon", copy)
              }} icon={`copy`} />
          </div>
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
