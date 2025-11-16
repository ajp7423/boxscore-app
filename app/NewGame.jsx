import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const NewGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Game</Text>

      <Link style={styles.link} href="/StatSelection">Pick-up(no FTs, 1s and 2s)➡️</Link>
      <Link style={styles.link} href="StatSelection">Regulation (2s and 3s, FTs)➡️</Link>

    </View>
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