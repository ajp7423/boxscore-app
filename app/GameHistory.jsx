import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';



const GameHistory = () => {

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Game History</Text>
      <Text>yuoll be able to view the final boxscores of the games you chose to save</Text>
    </ThemedView>
  )
}

export default GameHistory

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
  }
})