import { StyleSheet, ScrollView, View } from 'react-native';
import { useGame } from "../contexts/GameContext";
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const LiveBoxscore = () => {
  const { teams, selectedStats } = useGame();

  // Filter stats, exclude "points" because points are calculated
  const activeStats = Object.keys(selectedStats).filter(stat => selectedStats[stat] && !["points"].includes(stat));

  return (
    <ThemedView style={styles.container}>
      <ScrollView horizontal>
        <View style={{ flexDirection: "column" }}>
          {teams.map((team, teamIndex) => (
            <View key={teamIndex} style={{ marginBottom: 40 }}>
              <ThemedText style={styles.teamName}>{team.teamName}</ThemedText>

              {/* Header row */}
              <View style={[styles.row, styles.headerRow]}>
                <ThemedText style={[styles.cell, styles.playerCell]}>Player</ThemedText>
                {activeStats.map(stat => (
                  <ThemedText key={stat} style={styles.cell}>
                    {["1PT","2PT","3PT"].includes(stat) ? stat : stat}
                  </ThemedText>
                ))}
                <ThemedText style={styles.cell}>Points</ThemedText>
              </View>

              {/* Player rows */}
              {team.players.map((player, playerIndex) => {
                const points = player.stats.points || 0;

                return (
                  <View key={playerIndex} style={styles.row}>
                    <ThemedText style={[styles.cell, styles.playerCell]}>{player.name}</ThemedText>
                    {activeStats.map(stat => {
                      if (["1PT", "2PT", "3PT"].includes(stat)) {
                        return (
                          <ThemedText key={stat} style={styles.cell}>
                            {player.stats[stat] || 0}/{player.stats[`${stat}_attempts`] || 0}
                          </ThemedText>
                        )
                      } else {
                        return (
                          <ThemedText key={stat} style={styles.cell}>
                            {player.stats[stat] || 0}
                          </ThemedText>
                        )
                      }
                    })}
                    <ThemedText style={styles.cell}>{points}</ThemedText>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default LiveBoxscore;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  teamName: { fontWeight: "bold", fontSize: 24, marginBottom: 10 },
  row: { flexDirection: "row", marginBottom: 5 },
  headerRow: { borderBottomWidth: 1, borderBottomColor: "#000" },
  cell: { width: 70, textAlign: "center" },
  playerCell: { width: 120, textAlign: "left", paddingLeft: 5 },
});
