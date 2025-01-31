import { useGame } from "../context/GameContext";
import Button from "@mui/material/Button";

function Start() {
  const { startGame, teamScores } = useGame();
  const handleClick = () => {
    startGame();
  };
  return (
    <div>
      {!(teamScores.team1.correct.length === 0) && (
        <div>
          <h2>Sonuç:</h2>
          <h3>
            <p>
              Takım 1 Doğru: {teamScores.team1.correct.length} Yanlış:{" "}
              {teamScores.team1.wrong.length} Pass:{" "}
              {teamScores.team1.pass.length}{" "}
            </p>
            <p>
              Takım 1 Doğru: {teamScores.team2.correct.length} Yanlış:{" "}
              {teamScores.team2.wrong.length} Pass:{" "}
              {teamScores.team2.pass.length}{" "}
            </p>
          </h3>
        </div>
      )}
      <h1>Start</h1>
      <Button variant="contained" onClick={handleClick}>
        Start Game
      </Button>
    </div>
  );
}

export default Start;
