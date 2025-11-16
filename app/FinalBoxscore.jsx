import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const FinalBoxscore = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Final Boxscore</ThemedText>
      <ThemedText>the final stats will be displayed here</ThemedText>
      <Link style={styles.link} href="Index"><ThemedText>Home➡️</ThemedText></Link>
    </ThemedView>
  )
}

export default FinalBoxscore

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