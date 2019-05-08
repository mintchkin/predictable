import React, { Component } from "react";
import "./App.css";
import ChoiceList from "ChoiceList";
import RestartButton from "RestartButton";

const sampleChoices = [["U", "U"], ["U", "D"], ["D", "U"], ["D", "D"]];

class App extends Component {
  state = {
    choices: sampleChoices
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChoiceList choices={this.state.choices} />
          <RestartButton handler={e => this.setState({ choices: [] })} />
        </header>
      </div>
    );
  }
}

export default App;
