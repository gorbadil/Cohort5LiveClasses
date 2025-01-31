import { useGame } from "../context/GameContext";
import TabooCard from "./TabooCard";

function GameActive() {
  const { currentTeam, currentTurn, timeLeft, teamScores } = useGame();
  return (
    <div>
      <h2>
        Takım {currentTeam} - Tur: {currentTurn}{" "}
      </h2>
      <h4>
        <p>
          Takım 1 Doğru: {teamScores.team1.correct.length} Yanlış:{" "}
          {teamScores.team1.wrong.length} Pass: {teamScores.team1.pass.length}{" "}
        </p>
        <p>
          Takım 1 Doğru: {teamScores.team2.correct.length} Yanlış:{" "}
          {teamScores.team2.wrong.length} Pass: {teamScores.team2.pass.length}{" "}
        </p>
      </h4>
      <h3>Kalan Süre: {timeLeft}</h3>
      <TabooCard />
    </div>
  );
}

export default GameActive;
