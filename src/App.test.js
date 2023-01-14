import {render, screen} from "@testing-library/react"
import App from "./App"

describe("Does App Renders Correctly", () => {

  test("Main in App Renders", () => { 
    render(<App />);
    const main = screen.getByRole("main")
    expect(main).toBeInTheDocument()
  })
})