import { useEffect, useRef, useContext } from "react";
import { Context } from "./context";
import "./App.css";

function Counter() {
  const inputRef = useRef();
  const { state, color, reset, handleOnChange } = useContext(Context);
  return (
    <>
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
  const { decrement, increment } = useContext(Context);
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
  const { changeColor, state } = useContext(Context);
  useEffect(() => {
    changeColor(state.count < 0 ? "#c0392b" : "#FFFFFF");
  }, [state.count, changeColor]);

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
