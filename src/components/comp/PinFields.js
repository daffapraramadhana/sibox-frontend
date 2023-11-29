import { useRef, useState } from "react";
import ReactPinField from "react-pin-field";
import PinField from "@soywod/pin-field";
import "./pinstyles.css";

const PIN = "98765";

export default function App() {
  const [setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const ref = useRef < PinField;
  console.log(completed);

  function fill() {
    ref.current?.inputs.forEach((input, i) => {
      input.value = PIN[i];
    });
  }

  function reset() {
    ref.current?.inputs.forEach((input, i) => {
      input.value = "";
    });
    setCompleted(false);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ReactPinField
        className="pin-field"
        onChange={setCode}
        onComplete={() => setCompleted(true)}
        format={(k) => k.toUpperCase()}
        disabled={completed}
        validate="0123456789"
        autoFocus
        ref={ref}
      />
      <button style={{ marginTop: "3rem" }} onClick={reset}>
        Reset
      </button>
      <button style={{ marginTop: "3rem", marginLeft: "1rem" }} onClick={fill}>
        Fill
      </button>
    </div>
  );
}
