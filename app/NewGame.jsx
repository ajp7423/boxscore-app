import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';



const NewGame = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>New Game</ThemedText>

      <Spacer/>

      <Link style={styles.link} href="/StatSelection"><ThemedText>Pick-up(no FTs, 1s and 2s)➡️</ThemedText></Link>
      <Link style={styles.link} href="StatSelection"><ThemedText>Regulation (2s and 3s, FTs)➡️</ThemedText></Link>

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
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})