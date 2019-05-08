import React, { Component } from "react";
import "./App.css";
import ChoiceList from "ChoiceList";
import RestartButton from "RestartButton";

const sampleChoices = [["U", "U"], ["U", "D"], ["D", "U"], ["D", "D"]];
const choices = Object.freeze({
  LEFT: "L",
  RIGHT: "R"
});

class App extends Component {
  state = {
    choices: sampleChoices
  };

  handleKeydown = event => {
    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        this.addChoice(choices.LEFT);
        break;
      case "Right":
      case "ArrowRight":
        this.addChoice(choices.RIGHT);
        break;
      default:
        return;
    }

    event.preventDefault();
  };

  addChoice(choice) {
    this.setState(state => ({
      choices: [...state.choices, [choice, choices.LEFT]]
    }));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

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
