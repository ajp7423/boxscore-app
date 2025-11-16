import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const GameHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game History</Text>
      <Text>yuoll be able to view the final boxscores of the games you chose to save</Text>
    </View>
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