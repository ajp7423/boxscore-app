import { StyleSheet, View } from 'react-native'
import { useGame } from "../contexts/GameContext";
import { useState } from 'react'



//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const StatKeeping = () => {

  const { teams, selectedStats, addStat } = useGame();

  const activeStats = Object.keys(selectedStats).filter(stat => selectedStats[stat]);
  const [activeStat, setActiveStat] = useState(null);
  
  const team1 = teams[0];
  const team2 = teams[1];

  return (
    <ThemedView style={styles.container}>
      <View>
        <ThemedText>{team1.teamName}</ThemedText>
          {team1.players.map((player, i) => (
            <ThemedText key={i} onPress={() => {
              if (!activeStat) return;
              addStat(0, i, activeStat);
              }}>
                {player.name}
            </ThemedText>
          ))}
      </View>

      <View>
        {activeStats.map((stat) => (
          <ThemedText key={stat} onPress={() => setActiveStat(stat)}>
            {stat}
          </ThemedText>
        ))}
      </View>

      <View>
        <ThemedText>{team2.teamName}</ThemedText>
        {team2.players.map((player, i) => (
           <ThemedText key={i} onPress={() => {
              if (!activeStat) return;
              addStat(0, i, activeStat);
              }}>
                {player.name}
            </ThemedText>        
          ))}
      </View>
    </ThemedView>
  )
}

export default StatKeeping

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 50 },
  title: { fontWeight: "bold", fontSize: 28 }, 
})