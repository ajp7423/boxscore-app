import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const TeamsCreation = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Teams Creation</Text>
      <Text>here you add team names and players and names</Text>
      <Link href="StatKeeping" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}>Start Game➡️</Link>

    </ThemedView>
  )
}

export default TeamsCreation

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