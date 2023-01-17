import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import riv from "./riv/pga.riv"

const CheckboxItem = ({ stateMachine = `checkbox`, className = `riveIcon`, state, setState, type, text = `Nothing` }) => {
  const { RiveComponent, rive } = useRive({
    src: riv,
    stateMachines: stateMachine,
    autoplay: true,
    artboard: stateMachine
  })

  const stateInput = useStateMachineInput(
    rive,
    stateMachine,
    stateMachine
  )
  const update = () => {
    stateInput.fire();
    setState((prevState) => !prevState)
  }

  return <div className="checkbox-container">
    <RiveComponent className={className} onClick={update} />
    <input className={stateMachine} type={stateMachine} name={type} id={type} checked={state} onChange={update} />
    <label  htmlFor={type}>{text}</label>
  </div>;

}

export { CheckboxItem };