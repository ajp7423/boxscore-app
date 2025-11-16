import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const StatKeeping = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Stat Keeping</ThemedText>
      <ThemedText>theres gonna be the players for each team and the stats in the middle and you pick the stat then the player it is attributed to</ThemedText>

      <Link href="LiveBoxscore" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}><ThemedText>View Boxscore</ThemedText></Link>

      <ThemedText>Youll be able to look at the live stats</ThemedText>

      <Link href="FinalBoxscore" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}><ThemedText>End Game</ThemedText></Link>

      <ThemedText>this will finish the game. there will be a pop up warning to ensure yuo want to end the game</ThemedText>
    </ThemedView>
  )
}

export default StatKeeping

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