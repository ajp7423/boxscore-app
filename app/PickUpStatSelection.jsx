import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'
import { Checkbox } from 'expo-checkbox'


//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import { useState } from "react";

const DEFAULT_STATS = [
  { key: "points", label: "Points" },
  { key: "1 pointers", label: "1 pointers" },
  { key: "2 pointers", label: "2 Pointers" },
  { key: "rebounds", label: "Rebounds" },
  { key: "assists", label: "Assists" },
  { key: "steals", label: "Steals" },
  { key: "blocks", label: "Blocks" },
  { key: "turnovers", label: "Turnovers" },
  { key: "fouls", label: "Fouls" },
];


const StatSelection = () => {

  const [selected, setSelected] = useState({
  points: true,
  "1 pointers": true,
  "2 pointers": true,
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
            <ThemedText style={styles.label}>{stat.label}</ThemedText>
            <Checkbox value={selected[stat.key]} onValueChange={() => toggleStat(stat.key)}/>
          </TouchableOpacity>
        ))}
      </View>
  
      <Link href="TeamsCreation" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}><ThemedText>Teams Creation➡️</ThemedText></Link>
    </ThemedView>
  )
}

export default StatSelection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  },
  title: {
    fontWeight: "bold",
    fontSize: 28
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
  label: {
    fontSize: 14,
    marginHorizontal: 5
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  box: {
    width: '30%',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginBottom: 5
  }
})