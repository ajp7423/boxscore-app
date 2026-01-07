import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedStats, setSelectedStats] = useState({
    "1PT": true,
    "2PT": true,
    "3PT": true,
    rebounds: true,
    assists: true,
    steals: true,
    blocks: true,
    turnovers: true,
    fouls: true
  });

  const [teams, setTeams] = useState([]);

  // Shot / Stat handler
  const addShot = (teamIndex, playerIndex, statName, made = true) => {
    setTeams(prevTeams => {
      const updatedTeams = [...prevTeams];
      const playerStats = updatedTeams[teamIndex].players[playerIndex].stats;

      // Shots (1PT, 2PT, 3PT)
      if (["1PT", "2PT", "3PT"].includes(statName)) {
        playerStats[`${statName}_attempts`] = (playerStats[`${statName}_attempts`] || 0) + 1;

        if (made) {
          playerStats[statName] = (playerStats[statName] || 0) + 1;
          playerStats.points += parseInt(statName); // 1PT => 1, 2PT => 2, 3PT => 3
        } else {
          playerStats[`${statName}_misses`] = (playerStats[`${statName}_misses`] || 0) + 1;
        }
      } else {
        // Non-shot stats
        playerStats[statName] = (playerStats[statName] || 0) + 1;
      }

      return updatedTeams;
    });
  };

  return (
    <GameContext.Provider value={{
      selectedStats,
      setSelectedStats,
      teams,
      setTeams,
      addShot
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
