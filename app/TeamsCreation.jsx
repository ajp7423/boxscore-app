import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useGame } from "../contexts/GameContext";
import { router } from "expo-router";

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const TeamsCreation = () => {
  const { setTeams: setGlobalTeams, selectedStats } = useGame();

  const [teams, setTeams] = useState([
    { teamName: "", players: [] },
    { teamName: "", players: [] }
  ]);

  const [addPlayerInput, setAddPlayerInput] = useState(["", ""]);

  const initializePlayerStats = () => {
    const stats = { points: 0 };
    Object.keys(selectedStats).forEach(stat => {
      if (["1PT", "2PT", "3PT"].includes(stat)) {
        stats[stat] = 0;
        stats[`${stat}_attempts`] = 0;
        stats[`${stat}_misses`] = 0;
      } else {
        stats[stat] = 0;
      }
    });
    return stats;
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Teams Creation</ThemedText>

      <View style={styles.teamsContainer}>
        {teams.map((team, index) => (
          <View style={styles.teamBlock} key={index}>
            <View style={styles.nameRow}>
              <ThemedText style={styles.emoji}>✏️</ThemedText>
              <TextInput style={styles.input} placeholder='Team Name'
                value={team.teamName}
                onChangeText={text => {
                  const updated = [...teams];
                  updated[index].teamName = text;
                  setTeams(updated);
                }}
              />
            </View>

            <TextInput style={styles.nameInput} placeholder='+ Add Player'
              value={addPlayerInput[index]}
              onChangeText={text => {
                const updated = [...addPlayerInput];
                updated[index] = text;
                setAddPlayerInput(updated);
              }}
              onSubmitEditing={() => {
                if (!addPlayerInput[index].trim()) return;

                const newPlayer = {
                  name: addPlayerInput[index],
                  stats: initializePlayerStats()
                };

                const updatedTeams = [...teams];
                updatedTeams[index].players.push(newPlayer);
                setTeams(updatedTeams);

                const updatedInputs = [...addPlayerInput];
                updatedInputs[index] = "";
                setAddPlayerInput(updatedInputs);
              }}
            />

            {team.players.map((player, i) => (
              <TouchableOpacity key={i} onPress={() => {
                const updatedTeams = [...teams];
                updatedTeams[index].players.splice(i, 1);
                setTeams(updatedTeams);
              }}>
                <ThemedText style={{ marginLeft: 30, marginTop: 5, fontWeight: 'bold' }}>
                  • {player.name}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={{ marginTop: 10, alignSelf: "center" }}
        onPress={() => {
          setGlobalTeams(teams);
          router.push("StatKeeping");
        }}
      >
        <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
          Start Game ➡️
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

export default TeamsCreation

const styles = StyleSheet.create({
  container: { flex: 1, padding: 50 },
  title: { fontWeight: "bold", fontSize: 28, marginBottom: 20, textAlign: 'center' },
  teamsContainer: { width: "100%" },
  teamBlock: { marginBottom: 30 },
  nameRow: { flexDirection: "row", alignItems: "center" },
  emoji: { fontSize: 20, marginRight: 6 },
  input: { fontSize: 20, borderBottomWidth: 1, paddingVertical: 4, width: "70%" },
  nameInput: { marginLeft: 25 }
});
