import { RiveAsset } from "./asset";
import { CheckboxItem } from "./CheckBox";
import { useGState } from "./GlobalState";
import "./_App.scss";


function App() {
  // Password Generation logic can be found here useGenerator.js
  const { length,
    setLength, lengthRef,
    generator, lowerLetterCheckbox,
    setLowerLetterCheckbox, upperLetterCheckbox,
    setUpperLetterCheckbox, numberCheckbox,
    setNumberCheckbox, symbolCheckbox,
    setSymbolCheckbox, passwordResult, copyText } = useGState()
  //   const { copy, length,
  //     setLength, lengthRef,
  //     generator, lowerLetterCheckbox,
  //     setLowerLetterCheckbox, upperLetterCheckbox,
  //     setUpperLetterCheckbox, numberCheckbox,
  //     setNumberCheckbox, symbolCheckbox,
  //     setSymbolCheckbox, passwordResult, copyText } = useGenerator()
  // cl()
  // JSX for this component
  return (
    <main className="App">

      <nav className="navBar">
        <p className="logo"><a href="https://www.linkedin.com/in/devbazz/">Clement <span className="dim">Bazuaye</span></a></p>
      </nav>
      <div className="generator">
        <h1 className="title" >Password Generator</h1>

        <section className="container ">
          <div className="container-flex">
            <output ref={copyText} >{passwordResult}</output>
            <RiveAsset className={`copy`} stateMachine={`copy`} copyText={copyText} />
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
            <CheckboxItem state={upperLetterCheckbox} setState={setUpperLetterCheckbox} type={`uppercase`} text={`Include Uppercase Letters`} />
            <CheckboxItem state={lowerLetterCheckbox} setState={setLowerLetterCheckbox} type={`lowercase`} text={`Include Lowercase Letters`} />
            <CheckboxItem state={numberCheckbox} setState={setNumberCheckbox} type={`numbers`} text={`Include Numbers`} />
            <CheckboxItem state={symbolCheckbox} setState={setSymbolCheckbox} type={`symbols`} text={`Include Symbols`} />
          </div>

          <button onClick={generator} className="generator-btn">Generate </button>
        </section>

      </div>
    </main>
  );
}

export default App;
// Hello
