import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isGameActive, setIsGameActive] = useState(true);
  const [currentTeam, setCurrentTeam] = useState("1");
  const [currentTour, setCurrentTour] = useState(1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [passCount, setPassCount] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);

  const data = {
    isGameActive,
    setIsGameActive,
    currentTeam,
    setCurrentTeam,
    currentTour,
    setCurrentTour,
    currentCardIndex,
    setCurrentCardIndex,
    passCount,
    setPassCount,
    timeLeft,
    setTimeLeft,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
