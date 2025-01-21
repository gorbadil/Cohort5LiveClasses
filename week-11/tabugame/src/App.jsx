import { useGame } from "./context/GameContext";
import Start from "./component/Start";
import GameActive from "./component/GameActive";
import "./App.css";

function App() {
  const { isGameActive } = useGame();
  return <div>{isGameActive ? <GameActive /> : <Start />}</div>;
}

export default App;
