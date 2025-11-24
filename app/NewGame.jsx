import { StyleSheet, View } from 'react-native'

//themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import ThemedCardBtn from '../components/ThemedCardBtn';


const NewGame = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText style={styles.title}>Choose Scoring System</ThemedText>
        
      <View style={styles.cardContainer}>
        <ThemedCardBtn
          href="/PickUpStatSelection"
          headerText="Pick-up Game"
          bodyItems={[
            "No free throws",
            "1s and 2s",
          ]}
        />      
        <ThemedCardBtn
          href="/RegStatSelection"
          headerText="Regulation Game"
          bodyItems={[
            "Free throws",
            "2s and 3s",
          ]}
        />      
      </View>
    </ThemedView>
  )
}

export default NewGame

const styles = StyleSheet.create({
cardContainer: {
  flexDirection: 'row',      
  justifyContent: 'space-between', 
  flexWrap: 'wrap',          
  marginHorizontal: 10,
},
title: {
  textAlign: 'center',
  marginTop: 30,
  fontSize: 25,
  fontWeight: 'bold'
},
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}
})