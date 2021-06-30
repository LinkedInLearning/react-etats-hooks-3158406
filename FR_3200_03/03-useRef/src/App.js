import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#FFFFFF");
  const [value, setValue] = useState(null);

  const handleOnChange = (e) => setValue(e.target.value);
  const increment = () => !!value && setCount(count + parseInt(value));
  const decrement = () => !!value && setCount(count - parseInt(value));
  const reset = () => setCount(0);

  useEffect(() => {
    setColor(count < 0 ? "#c0392b" : "#FFFFFF");
  }, [count]);
  return (
    <div className="App">
      <h1>Calculator</h1>
      <header className="App-header">
        <p className="App-p" style={{ color: color }}>
          {count}
        </p>
        <button onClick={reset}>reset</button>
        <br />

        <input type="number" onChange={handleOnChange} />
        <div className="App-buttons">
          <button className="App-button" onClick={decrement}>
            -
          </button>
          <button className="App-button" onClick={increment}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}
export default App;
