import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {

  const [selectedStats, setSelectedStats] = useState({});
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const addStat = (teamIndex, playerIndex, statName) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];

      updatedTeams[teamIndex].players[playerIndex].stats[statName] += 1;

      return updatedTeams;
    });
};

  return (
    
    <GameContext.Provider
      value={{
        selectedStats,
        setSelectedStats,
        teams,
        setTeams,
        addStat
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
