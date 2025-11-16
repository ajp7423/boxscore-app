import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const StatSelection = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Stat Selection</ThemedText>
      <ThemedText>various stats that you select to track</ThemedText>

      <Link href="TeamsCreation" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}><ThemedText>Teams Creation➡️</ThemedText></Link>
    </ThemedView>
  )
}

export default StatSelection

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