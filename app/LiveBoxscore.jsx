import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const LiveBoxscore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Boxscore</Text>
      <Text>the live stats in game will be able to be viewed here</Text>
    </View>
  )
}

export default LiveBoxscore

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