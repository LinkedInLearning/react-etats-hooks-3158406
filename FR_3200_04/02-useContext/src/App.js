import { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";

function Counter() {
  const inputRef = useRef();
  const [color, setColor] = useState("#FFFFFF");

  const handleOnChange = (e) =>
    dispatch({ type: "change", payload: { value: e.target.value } });

  const reset = () => dispatch({ type: "reset" });

  useEffect(() => {
    setColor(state.count < 0 ? "#c0392b" : "#FFFFFF");
  }, [state.count]);
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => !!state.intValue && dispatch({ type: "increment" });
  const decrement = () => !!state.intValue && dispatch({ type: "decrement" });
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
