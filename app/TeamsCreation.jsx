import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

const TeamsCreation = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Teams Creation</ThemedText>
      <ThemedText>here you add team names and players and names</ThemedText>

      <Link href="StatKeeping" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}><ThemedText>Start Game➡️</ThemedText></Link>

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