import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { tabooCards } from "../data/tabooCards";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isGameActive, setIsGameActive] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [passCount, setPassCount] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [teamScores, setTeamScores] = useState({
    team1: { correct: [], wrong: [], pass: [] },
    team2: { correct: [], wrong: [], pass: [] },
  });

  const startGame = () => {
    setIsGameActive(true);
    setCurrentTeam(1);
    setCurrentTurn(1);
    setCurrentCardIndex(0);
    setPassCount(3);
    setTimeLeft(60);
    setTimerActive(true);
    setTeamScores({
      team1: { correct: [], wrong: [], pass: [] },
      team2: { correct: [], wrong: [], pass: [] },
    });
  };

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endTurn();
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  const endTurn = () => {
    if (currentTurn === 2 && currentTeam === 2) {
      setIsGameActive(false);
      setTimerActive(false);
    } else {
      setCurrentTeam((prev) => (prev === 1 ? 2 : 1));
      setCurrentTurn((prev) => (currentTeam === 2 ? prev + 1 : prev));
      setCurrentCardIndex(0);
      setPassCount(3);
      setTimeLeft(60);
      setTimerActive(true);
      console.log(currentCardIndex);
    }
  };

  const nextCard = () => {
    if (currentCardIndex + 1 < tabooCards.length) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      endTurn();
      console.log(teamScores);
    }
  };

  const handlePass = () => {
    const currentTeamKey = `team${currentTeam}`;
    const currentWord = tabooCards[currentCardIndex].word;
    if (passCount > 0) {
      setPassCount((prev) => prev - 1);
      setTeamScores((prev) => ({
        ...prev,
        [currentTeamKey]: {
          ...prev[currentTeamKey],
          pass: [...prev[currentTeamKey].correct, currentWord],
        },
      }));
      nextCard();
    }
    // nextCard();
  };

  const handleCorrect = () => {
    const currentTeamKey = `team${currentTeam}`;
    const currentWord = tabooCards[currentCardIndex].word;

    setTeamScores((prev) => ({
      ...prev,
      [currentTeamKey]: {
        ...prev[currentTeamKey],
        correct: [...prev[currentTeamKey].correct, currentWord],
      },
    }));
    nextCard();
  };

  const handleWrong = () => {
    const currentTeamKey = `team${currentTeam}`;
    const currentWord = tabooCards[currentCardIndex].word;

    setTeamScores((prev) => ({
      ...prev,
      [currentTeamKey]: {
        ...prev[currentTeamKey],
        wrong: [...prev[currentTeamKey].correct, currentWord],
      },
    }));
    nextCard();
  };

  const data = {
    isGameActive,
    currentTeam,
    // currentTour,
    currentTurn,
    currentCardIndex,
    passCount,
    timeLeft,
    teamScores,
    endTurn,
    nextCard,
    handlePass,
    handleCorrect,
    handleWrong,
    startGame,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
