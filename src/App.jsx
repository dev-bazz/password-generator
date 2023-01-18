import { RiveAsset } from "./asset";
import { CheckboxItem } from "./CheckBox";
import { useGState } from "./GlobalState";
import "./_App.scss";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import riv from "./riv/pga.riv"


function App() {
  // Password Generation logic can be found here useGenerator.js
  const { length,
    setLength, lengthRef,
    generator, lowerLetterCheckbox,
    setLowerLetterCheckbox, upperLetterCheckbox,
    setUpperLetterCheckbox, numberCheckbox,
    setNumberCheckbox, symbolCheckbox,
    setSymbolCheckbox, passwordResult, copyText } = useGState()

  
    
      const stateM  = 'State Machine 1'
      const { RiveComponent, rive } = useRive({
        src: riv,
        autoplay: true,
        artboard: 'Tree',
        stateMachines:stateM
      })
      const anime = useStateMachineInput(rive,stateM,"input" )
    const grow = (length) => {
      anime.value = length * 5
    }
       <RiveComponent  onClick={() => {
        grow(length)
      }} />
    
  return (
    <main className="App">
      {/* <Loader /> */}

      <nav className="navBar">
        <p className="logo"><a href="https://www.linkedin.com/in/devbazz/">Clement <span className="dim">Bazuaye</span></a></p>
      </nav>
      <div className="generator">
        <h1 className="title" >Password Generator</h1>

        <section className="container treetop">
          {/* <TreeGrowth className={`big`} length={length} /> */}
          <RiveComponent  className="big" />
          
          <div className="container-flex">
            <output className="output" datatype="previous password" ref={copyText} >{passwordResult}</output>
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
              grow(length)
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
