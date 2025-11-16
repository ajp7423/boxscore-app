import { StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

//assests
import Logo from '../assets/images/basketball_clipart.png';
import Account from '../assets/images/account icon.png'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';



const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Link href='/Login' style={styles.account}><Image source={Account}/></Link>

      <Image source={Logo}/>
      <ThemedText style={styles.title}>Boxscore</ThemedText>

      <Spacer height={20}/>

      <Link style={styles.link} href="/NewGame"><ThemedText>New Game</ThemedText></Link>
      <Link style={styles.link} href="/GameHistory"><ThemedText>Game History</ThemedText></Link>
        
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
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
  account: {
    width: 35,
    height: undefined,
    aspectRatio: 1,
    position: "absolute",
    top: 35,
    right: 20,
  }
})