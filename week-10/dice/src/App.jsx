import { useState } from "react";
import "./App.css";

const sleep = (ms = 100) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function App() {
  // Scores
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Dice
  const [playerDice, setPlayerDice] = useState(0);
  const [computerDice, setComputerDice] = useState(0);
  const [rolling, setRolling] = useState(false);

  // Roll Dice
  const rollDice = async () => {
    setRolling(true);

    // const randomPlayerDice = Math.floor(Math.random() * 6) + 1;
    // const randomComputerDice = Math.floor(Math.random() * 6) + 1;

    // setPlayerDice(randomPlayerDice);
    // setComputerDice(randomComputerDice);
    let randomPlayerDice = 0;
    let randomComputerDice = 0;
    for (let i = 0; i < 20; i++) {
      randomPlayerDice = Math.floor(Math.random() * 6) + 1;
      randomComputerDice = Math.floor(Math.random() * 6) + 1;

      setPlayerDice(randomPlayerDice);
      setComputerDice(randomComputerDice);

      await sleep();

      if (i === 19) {
        setRolling(false);
      }
    }

    // setTimeout(() => {
    // setRolling(false);
    // }, 1000);

    if (randomPlayerDice > randomComputerDice) {
      setPlayerScore((prev) => prev + 1);
      // setPlayerScore(playerScore + 1);
      setHighScore((prev) => prev + 1);
    } else if (randomPlayerDice < randomComputerDice) {
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1>Dice Game</h1>
      <div>
        <h2>Player</h2>
        <h1> {playerDice} </h1>
      </div>
      <div>
        <h2>Computer</h2>
        <h1> {computerDice} </h1>
      </div>
      <br />
      <button disabled={rolling} onClick={rollDice}>
        {" "}
        {rolling ? "Rolling..." : "Roll Dice"}{" "}
      </button>
      <div>
        <h2>Scores</h2>
        <p>Player Score: {playerScore} </p>
        <p>Computer Score: {computerScore} </p>
        <p>High Score: {highScore} </p>
      </div>
    </>
  );
}

export default App;
