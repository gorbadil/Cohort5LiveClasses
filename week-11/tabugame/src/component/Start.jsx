import { useGame } from "../context/GameContext";
import Button from "@mui/material/Button";

function Start() {
  const { setIsGameActive } = useGame();
  const handleClick = () => {
    setIsGameActive(true);
  };
  return (
    <div>
      <h1>Start</h1>
      <Button variant="contained" onClick={handleClick}>
        Start Game
      </Button>
    </div>
  );
}

export default Start;
