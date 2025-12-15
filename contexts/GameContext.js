import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {

  const [selectedStats, setSelectedStats] = useState({});
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  addStat(teamIndex, playerIndex, statName)

  return (
    
    <GameContext.Provider
      value={{
        selectedStats,
        setSelectedStats,
        teams,
        setTeams,
        players,
        setPlayers
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
