import { useState, useEffect, useRef, useReducer } from "react"
import './App.css';


const initialState = {
  count: 0,
  intValue: null
}
function reducer(state, action) {
  switch (action.type) {
    case "change":
      return {
        ...state,
        intValue: action.payload.value
      }
    case "increment":
      return {
        ...state,
        count: state.count + parseInt(state.intValue)
      }
    case "decrement":
      return {
        ...state,
        count: state.count - parseInt(state.intValue)
      }
    case "reset":
      return {
        ...state,
        count: 0
      }
    default: return state
  }
}
function App() {
  const inputRef = useRef()
  const [color, setColor] = useState('#FFFFFF')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOnChange = (e) => dispatch({ type: "change", payload: { value: e.target.value } })
  const increment = () => !!state.intValue && dispatch({ type: "increment" })
  const decrement = () => !!state.intValue && dispatch({ type: "decrement" })
  const reset = () => dispatch({ type: "reset" })

  useEffect(() => {
    setColor(state.count < 0 ? '#c0392b' : '#FFFFFF')
  }, [state.count])
  return (
    <div className="App">
      <h1>Calculator</h1>
      <header className="App-header">
        <p className="App-p" style={{ color: color }}>{state.count}</p>
        <button onClick={reset}>reset</button><br />
        <input ref={inputRef} type="number" onChange={handleOnChange} />
        <div className="App-buttons">
          <button className="App-button" onClick={decrement}>-</button>
          <button className="App-button" onClick={increment}>+</button>
        </div>
      </header>
    </div >
  );
}
export default App;
