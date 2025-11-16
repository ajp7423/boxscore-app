import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'


const StatSelection = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Stat Selection</Text>
      <Text>various stats that you select to track</Text>
      <Link href="TeamsCreation" style={{marginTop: 50, fontWeight: "bold", fontSize: 28, borderBottomWidth: 1}}>Teams Creation➡️</Link>
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