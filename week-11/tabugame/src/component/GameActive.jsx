import { useGame } from "../context/GameContext";
import TabooCard from "./TabooCard";

function GameActive() {
  const { currentTeam, currentTour, timeLeft } = useGame();
  return (
    <div>
      <h2>
        Takım {currentTeam} - Tur: {currentTour}{" "}
      </h2>
      <h3>Kalan Süre: {timeLeft}</h3>
      <TabooCard />
    </div>
  );
}

export default GameActive;
