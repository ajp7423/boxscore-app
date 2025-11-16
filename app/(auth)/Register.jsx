import { StyleSheet } from 'react-native'

//themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Register</ThemedText>
    </ThemedView>
  )
}

export default Register

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
