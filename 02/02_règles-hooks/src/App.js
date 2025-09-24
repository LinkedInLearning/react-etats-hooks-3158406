import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <br />
        <button onClick={() => setCount(count + 1)}>+</button>
      </header>
    </div>
  );
}
export default App;
