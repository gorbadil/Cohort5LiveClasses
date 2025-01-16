import { useState, useEffect } from "react";
import "./App.css";

const buttons = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
  { id: 4, color: "yellow" },
];

const sleep = (ms = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

function App() {
  // true = Computer, false = User
  const [turn, setTurn] = useState(true);

  // playing
  const [playing, setPlaying] = useState(false);

  // computer, player moves
  const [computerMoves, setComputerMoves] = useState([]);
  const [playerMoves, setPlayerMoves] = useState([]);

  // Score
  const [score, setScore] = useState(0);

  const computerTurn = () => {
    const random = Math.floor(Math.random() * 4) + 1;
    setComputerMoves((prev) => [...prev, random]);
  };

  const handleButtonClick = async (id) => {
    const pad = document.getElementById(id);
    pad.classList.add("active");
    await sleep();
    pad.classList.remove("active");
    setPlayerMoves((prev) => [...prev, id]);
  };

  const handleStart = async () => {
    setPlaying(true);
    setComputerMoves([]);
    setPlayerMoves([]);
    setScore(0);
    await sleep(1000);
    computerTurn();
  };

  useEffect(() => {
    const animate = async () => {
      for (let i = 0; i < computerMoves.length; i++) {
        const pad = document.getElementById(computerMoves[i]);
        pad.classList.add("active");
        await sleep();
        pad.classList.remove("active");
        await sleep();
        setTurn(false);
      }
    };
    animate();
  }, [computerMoves]);

  useEffect(() => {
    if (playerMoves.length === 0) return;
    if (playerMoves.length === computerMoves.length) {
      if (JSON.stringify(playerMoves) === JSON.stringify(computerMoves)) {
        setScore((prev) => prev + 1);
        setPlayerMoves([]);
        setTimeout(() => {
          computerTurn();
        }, 1000);
        setTurn(true);
      } else {
        setPlaying(false);
      }
    }
  }, [playerMoves]);

  return (
    <>
      <button disabled={playing} onClick={handleStart}>
        {playing ? score : "Start"}
      </button>
      <p> {turn ? "Computer Turn" : "Player Turn"} </p>
      <h3>Simon Says</h3>
      <div className="board">
        <div className="pads">
          {buttons.map((button, index) => (
            <div
              id={button.id}
              className={`pad ${button.color}`}
              key={index}
              onClick={() => {
                handleButtonClick(button.id);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

// useEffect
// 1. Component ilk Render olduğunda (mount)
// 2. Component state değiştiğinde
// 3. component unmount olduğunda
