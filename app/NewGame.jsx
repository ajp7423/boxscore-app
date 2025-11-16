import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';


const NewGame = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>New Game</ThemedText>

      <Link style={styles.link} href="/StatSelection">Pick-up(no FTs, 1s and 2s)➡️</Link>
      <Link style={styles.link} href="StatSelection">Regulation (2s and 3s, FTs)➡️</Link>

    </ThemedView>
  )
}

export default NewGame

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 15
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})