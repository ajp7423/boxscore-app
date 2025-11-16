import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const LiveBoxscore = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Live Boxscore</ThemedText>
      <ThemedText>the live stats in game will be able to be viewed here</ThemedText>
    </ThemedView>
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