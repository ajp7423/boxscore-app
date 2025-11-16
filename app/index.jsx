import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

import Logo from '../assets/images/basketball_clipart.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
      <Text style={styles.title}>Boxscore</Text>

      <Link style={styles.link} href="/NewGame">New Game</Link>
      <Link style={styles.link} href="/GameHistory">Game History</Link>
        
    </View>
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