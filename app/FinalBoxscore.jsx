import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const FinalBoxscore = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Final Boxscore</Text>
      <Text>the final stats will be displayed here</Text>
      <Link style={styles.link} href="Index">Home➡️</Link>
    </ThemedView>
  )
}

export default FinalBoxscore

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