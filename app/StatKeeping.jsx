import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const StatKeeping = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stat Keeping</Text>
      <Text>theres gonna be the players for each team and the stats in the middle and you pick the stat then the player it is attributed to</Text>
      <Link href="LiveBoxscore" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}>View Boxscore</Link>
      <Text>Youll be able to look at the live stats</Text>
      <Link href="FinalBoxscore" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}>End Game</Link>
      <Text>this will finish the game. there will be a pop up warning to ensure yuo want to end the game</Text>
    </View>
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