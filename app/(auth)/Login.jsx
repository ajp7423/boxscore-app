import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

//themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>

      <Link href="/Register" style={styles.link}><ThemedText>Register Instead</ThemedText></Link>
    </ThemedView>
  )
}

export default Login

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
  }
})
