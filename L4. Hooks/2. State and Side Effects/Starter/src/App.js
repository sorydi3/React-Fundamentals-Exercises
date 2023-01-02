import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

let value1 = Math.floor(Math.random() * 100);
let value2 = Math.floor(Math.random() * 100);
let value3 = Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
let numQuestions = 0;
let numCorrect = 0;

function checkAnswer(setNumCorrect, setNumQuestions, response) {
  setNumQuestions((numQuestions) => numQuestions + 1);
  setNumCorrect((numCorrect) => {
    const correctAnswer = value1 + value2 + value3;
    let result = response === (correctAnswer === proposedAnswer);
    return result ? numCorrect + 1 : numCorrect;
  });
}

function generateRandomValues() {
  value1 = Math.floor(Math.random() * 100);
  value2 = Math.floor(Math.random() * 100);
  value3 = Math.floor(Math.random() * 100);
  proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
}

const App = () => {
  const [numCorrect, setNumCorrect] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  useEffect(() => {
    generateRandomValues();
  }, []);

  useEffect(() => {
    generateRandomValues();
  }, [numQuestions, numCorrect]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button
          onClick={() => checkAnswer(setNumQuestions, setNumCorrect, true)}
        >
          True
        </button>
        <button
          onClick={() => checkAnswer(setNumQuestions, setNumCorrect, false)}
        >
          False
        </button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;
