import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from 'expo-checkbox'
import { useGame } from "../contexts/GameContext";
import { router } from "expo-router";

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import { useState } from "react";

const DEFAULT_STATS = [
  { key: "1PT", label: "1PT" },
  { key: "2PT", label: "2PT" },
  { key: "rebounds", label: "Rebounds" },
  { key: "assists", label: "Assists" },
  { key: "steals", label: "Steals" },
  { key: "blocks", label: "Blocks" },
  { key: "turnovers", label: "Turnovers" },
  { key: "fouls", label: "Fouls" },
];


const StatSelection = () => {

  const { setSelectedStats } = useGame();

  const [selected, setSelected] = useState({
  "1PT": true,
  "2PT": true,
  rebounds: true,
  assists: true,
  steals: true,
  blocks: true,
  turnovers: true,
  fouls: true,
  });

  const toggleStat = (stat) =>{
    setSelected(prev => ({
      ...prev, 
      [stat]: !prev[stat]
    }))
  } 

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Stat Selection</ThemedText>

      <View style={styles.grid}>
        {DEFAULT_STATS.map((stat) => (
          <TouchableOpacity style={styles.box} key={stat.key} onPress={() => toggleStat(stat.key)}>
            <Checkbox style={styles.checkbox} value={selected[stat.key]} onValueChange={() => toggleStat(stat.key)}/>
            <ThemedText style={styles.label}>{stat.label}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>
  
      <TouchableOpacity onPress={() => {
          setSelectedStats(selected);   
          router.push("TeamsCreation");
        }}>
          <ThemedText style={styles.link}>Teams Creation ➡️</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

export default StatSelection

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 50 },
  title: { fontWeight: "bold", fontSize: 28 },
  link: { marginVertical: 10, borderBottomWidth: 1, fontSize: 25 },
  label: { fontSize: 11, marginHorizontal: 5, fontWeight: 'bold', textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 7 },
  box: { width: '31%', borderColor: 'black', borderWidth: 2, justifyContent: 'center', padding: 5, marginBottom: 20, margin: 1 },
  checkbox: { alignSelf: 'center' }
})