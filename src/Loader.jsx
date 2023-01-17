import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import React, { useEffect } from 'react'
import load from "./riv/lock_icon (1).riv"
import "./loader.scss"

export default function Loader() {
  const { RiveComponent, rive } = useRive({
    src: load,
    autoplay: true,
    stateMachines: "Lock"
  })

  const input = useStateMachineInput(rive, "State Machine 1", "Lock")
  useEffect(() => {
    input.fire()
  },[])
  return (
    <div className="loader">

      <RiveComponent className="loaderI" />
    </div>
  )
}
