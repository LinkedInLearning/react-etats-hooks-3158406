import { useEffect, useRef, useContext } from "react";
import { useCounterContext } from "./context";
import { useThemeContext } from "./ThemeProvider";
import "./App.css";

function Counter() {
  const inputRef = useRef();
  const { state, color, reset, handleOnChange } = useCounterContext();
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
  const { decrement, increment } = useCounterContext();
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

function ThemeControls() {
  const { theme, updateSettings } = useThemeContext();
  return <button onClick={updateSettings}>{theme}</button>;
}

function App() {
  const { changeColor, state } = useCounterContext();
  const { themeSettings } = useThemeContext();
  useEffect(() => {
    changeColor(state.count < 0 ? "#c0392b" : themeSettings);
  }, [state.count, changeColor, themeSettings]);

  return (
    <div className="App">
      <h1>Calculator</h1>
      <ThemeControls />
      <header className="App-header" style={themeSettings}>
        <Counter />
        <Controls />
      </header>
    </div>
  );
}
export default App;
