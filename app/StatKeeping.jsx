import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useGame } from "../contexts/GameContext";
import { router } from "expo-router";


//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const StatKeeping = () => {
  const { teams, selectedStats, addShot } = useGame();
  const activeStats = Object.keys(selectedStats).filter(stat => selectedStats[stat]);
  const [activeShotType, setActiveShotType] = useState(null);

  const team1 = teams[0];
  const team2 = teams[1];

  const parseShot = (shotKey) => {
    if (shotKey.includes("_made")) return { type: shotKey.replace("_made", ""), made: true };
    if (shotKey.includes("_miss")) return { type: shotKey.replace("_miss", ""), made: false };
    return { type: shotKey, made: true }; // other stats
  };

  return (
    <ThemedView style={styles.container}>

      {/* Team 1 */}
      <View style={{ marginBottom: 20 }}>
        <ThemedText style={styles.teamName}>{team1.teamName}</ThemedText>
        {team1.players.map((player, i) => (
          <TouchableOpacity key={i} onPress={() => {
            if (!activeShotType) return;
            const { type, made } = parseShot(activeShotType);
            addShot(0, i, type, made);
          }}>
            <ThemedText style={styles.playerName}>{player.name}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stat Buttons */}
      <ScrollView horizontal style={{ marginBottom: 20 }}>
        {activeStats.map(stat => {
          if (["1PT", "2PT", "3PT"].includes(stat)) {
            return (
              <View key={stat} style={{ flexDirection: "row", marginRight: 10 }}>
                <TouchableOpacity onPress={() => setActiveShotType(`${stat}_made`)}>
                  <ThemedText style={styles.button}>{stat} Made</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveShotType(`${stat}_miss`)}>
                  <ThemedText style={styles.button}>{stat} Miss</ThemedText>
                </TouchableOpacity>
              </View>
            )
          } else {
            return (
              <TouchableOpacity key={stat} onPress={() => setActiveShotType(stat)}>
                <ThemedText style={styles.button}>{stat}</ThemedText>
              </TouchableOpacity>
            )
          }
        })}
      </ScrollView>

      <TouchableOpacity
        style={{ marginVertical: 20 }}
        onPress={() => router.push("LiveBoxscore")}>
        <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
          View Live Boxscore 📊
        </ThemedText>
      </TouchableOpacity>


      {/* Team 2 */}
      <View>
        <ThemedText style={styles.teamName}>{team2.teamName}</ThemedText>
        {team2.players.map((player, i) => (
          <TouchableOpacity key={i} onPress={() => {
            if (!activeShotType) return;
            const { type, made } = parseShot(activeShotType);
            addShot(1, i, type, made);
          }}>
            <ThemedText style={styles.playerName}>{player.name}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

    </ThemedView>
  );
};

export default StatKeeping;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginBottom: 10},
  teamName: { fontWeight: "bold", fontSize: 22, marginBottom: 10 },
  playerName: { fontSize: 18, marginLeft: 10, marginBottom: 5 },
  button: { fontSize: 16, marginRight: 10, fontWeight: "bold", padding: 5, borderWidth: 1, borderRadius: 5 }
});
