import { useEffect, useRef, useContext } from "react";
import { Context } from "./context";
import "./App.css";

function Counter() {
  const { state, color, reset, handleOnChange, changeColor } =
    useContext(Context);
  const inputRef = useRef();
  useEffect(() => {
    changeColor(state.count < 0 ? "#c0392b" : "#FFFFFF");
  }, [state.count, changeColor]);
  return (
    <>
      {" "}
      <p className="App-p" style={{ color: color }}>
        {state.count}
      </p>
      <button onClick={reset}>reset</button>
      <br />
      <input ref={inputRef} type="number" onChange={handleOnChange} />
    </>
  );
}
function Controls() {
  const { increment, decrement } = useContext(Context);
  return (
    <div className="App-buttons">
      <button className="App-button" onClick={decrement}>
        -
      </button>
      <button className="App-button" onClick={increment}>
        +
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <header className="App-header">
        <Counter />
        <Controls />
      </header>
    </div>
  );
}
export default App;
