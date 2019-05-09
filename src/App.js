import React, { Component } from "react";
import "./App.css";
import ChoiceList from "ChoiceList";
import RestartButton from "RestartButton";
import PredictorSelector from "PredictorSelector";
import {
  createStatic,
  createRandom,
  createOneBitCounter,
  createTwoBitCounter
} from "predictors";

const sampleChoices = [["U", "U"], ["U", "D"], ["D", "U"], ["D", "D"]];
const choices = Object.freeze({
  LEFT: "L",
  RIGHT: "R"
});

const predictors = Object.freeze({
  STATIC: createStatic,
  RANDOM: createRandom,
  ONE_BIT: createOneBitCounter,
  TWO_BIT: createTwoBitCounter
});

class App extends Component {
  state = {
    choices: sampleChoices,
    predictor: predictors.STATIC(choices.LEFT, choices.RIGHT)
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

  handleSelector = event => {
    console.log(event.target.value);
    this.setState({
      predictor: predictors[event.target.value](choices.LEFT, choices.RIGHT)
    });
  };

  handleReset = () => this.setState({ choices: [] });

  addChoice(choice) {
    this.setState(({ choices, predictor }) => ({
      choices: [...choices, [choice, predictor(choices.map(([fst, _]) => fst))]]
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
          <div>
            <PredictorSelector
              predictors={Object.keys(predictors)}
              handleChange={this.handleSelector}
            />
            <RestartButton handler={this.handleReset} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
