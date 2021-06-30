import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`count is ${this.state.count}`);
  }
  componentDidUpdate() {
    console.log(`count is ${this.state.count}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>You clicked {this.state.count} times</p>
          <br />
          <button
            onClick={() =>
              this.setState({ ...this.state, count: this.state.count + 1 })
            }
          >
            +
          </button>
        </header>
      </div>
    );
  }
}
export default App;
