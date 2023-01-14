import { Icons } from "./asset";
import { useGenerator } from "./calculator";
import "./_App.scss";

// JSX Component
function App() {
  const { copy, length, setLength, lengthRef, generator } = useGenerator()

  return (
    <main className="App">

      <nav className="navBar">
        <p className="logo"><a href="https://www.linkedin.com/in/devbazz/">Clement <span className="dim">Bazuaye</span></a></p>
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

        <section className="container controls">
          <div className="slider-group">
            <div className="container-flex">
              <p className="ln">Character Length</p>
              <p className="passLength">{length}</p>
            </div>
            <input role={`feed`} ref={lengthRef} onChange={() => {
              const { current: { value } } = lengthRef
              setLength(value)
            }} value={length} type="range" className="range" name="length" min={4} max={20} />
          </div>

          <div className="checkers">
            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" name="uppercase" id="uppercase" />
              <label htmlFor="uppercase">Include Uppercase Letters</label>
            </div>
            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" name="lowercase" id="lowercase" />
              <label htmlFor="lowercase">Include Lowercase Letters</label>
            </div>
            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" name="numbers" id="numbers" />
              <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" name="symbols" id="symbols" />
              <label htmlFor="symbols">Include Symbols</label>
            </div>
          </div>
          <button onClick={generator} className="generator-btn">Generate <Icons icon={`rotate`} /></button>
        </section>

      </div>
    </main>
  );
}

export default App;
// Hello
