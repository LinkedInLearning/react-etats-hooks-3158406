import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(null);
  return (
    <div className="App">
      <h1>useState</h1>
      <header className="App-header">
        <p>Hello {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </header>
    </div>
  );
}
export default App;
