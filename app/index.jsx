import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

import Logo from '../assets/images/basketball_clipart.png';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';



const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo}/>
      <ThemedText style={styles.title}>Boxscore</ThemedText>

      <Link style={styles.link} href="/NewGame">New Game</Link>
      <Link style={styles.link} href="/GameHistory">Game History</Link>
        
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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