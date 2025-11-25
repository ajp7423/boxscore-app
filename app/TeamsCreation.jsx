import { StyleSheet, View, TextInput } from 'react-native'
import { Link } from 'expo-router'
import { useActionState, useState } from 'react'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const TeamsCreation = () => {

  const [teams, setTeams] = useState([
    {teamName: "", players: []},
    {teamName: "", players: []}
  ])

  const [addPlayerInput, setAddPlayerInput] = useState(["", ""]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Teams Creation</ThemedText>
      
      <View style={styles.teamsContainer}>
        {teams.map((team, index) => (
          <View style={styles.teamBlock} key={index}>

            <View style={styles.nameRow}>
              <ThemedText style={styles.emoji}>✏️</ThemedText>
              <TextInput style={styles.input} placeholder='Team Name' value={team.teamName} onChangeText={(text) => {
                const updatedTeamName = [...teams] //getting new holder for name
                updatedTeamName[index].teamName = text //set it equal to the text in the input
                setTeams(updatedTeamName) //update team name and keep everything the same
              }}/>
            </View>

              <TextInput style={styles.nameInput} placeholder='+ Add Player' value={addPlayerInput[index]} onChangeText={(text) => {
                const updatedAddPlayerInput = [...addPlayerInput]
                updatedAddPlayerInput[index] = text;
                setAddPlayerInput(updatedAddPlayerInput)
              }} //maybe a button or something to add would be better than hitting enter but this is good for now
              onSubmitEditing={() => {
                const updatedTeams = [...teams];
                updatedTeams[index].players.push(addPlayerInput[index])
                setTeams(updatedTeams)

                const updatedInputs = [...addPlayerInput]
                updatedInputs[index] = "";
                setAddPlayerInput(updatedInputs);
              }}
            />
              {team.players.map((player, i) => (
                <ThemedText key={i} style={{ marginLeft: 30, marginTop: 5, fontWeight: 'bold' }}>
                  • {player}
                </ThemedText>
              ))}
          </View>
        ))}
      </View>
    </ThemedView>
  )
}

export default TeamsCreation

const styles = StyleSheet.create({
  container: { flex: 1, padding: 50 },
  title: { fontWeight: "bold", fontSize: 28, marginBottom: 20, textAlign: 'center'},
  teamsContainer: { width: "100%" },
  teamBlock: { marginBottom: 30 },
  nameRow: { flexDirection: "row", alignItems: "center" },
  emoji: { fontSize: 20, marginRight: 6 },
  input: { fontSize: 20, borderBottomWidth: 1, paddingVertical: 4, width: "70%" },
  nameInput: { marginLeft: 25,}
})
