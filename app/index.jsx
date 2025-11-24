import { StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

//assests
import Logo from '../assets/images/basketball_clipart.png';
import Account from '../assets/images/account icon.png'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import ThemedBtn from '../components/ThemedLinkBtn';



const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Link href='/Login' style={styles.account}><Image source={Account}/></Link>

      <Image source={Logo}/>
      <ThemedText style={styles.title}>Boxscore</ThemedText>

      <Spacer height={30}/>

      <ThemedBtn href="/NewGame">New Game</ThemedBtn>
      <Spacer height={10}/>
      <ThemedBtn href="GameHistory">Game History</ThemedBtn>
        
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
  account: {
    width: 35,
    height: undefined,
    aspectRatio: 1,
    position: "absolute",
    top: 35,
    right: 20,
  }
})