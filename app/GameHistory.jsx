import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';



const GameHistory = () => {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Game History</ThemedText>
      <ThemedText>yuoll be able to view the final boxscores of the games you chose to save</ThemedText>
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