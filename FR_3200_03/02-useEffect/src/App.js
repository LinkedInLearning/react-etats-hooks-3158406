import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <header className="App-header">
        <p className="App-p">{count}</p>
        <div className="App-buttons">
          <button className="App-button" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="App-button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}
export default App;
