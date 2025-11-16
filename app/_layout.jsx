import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import {Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
      <StatusBar value='auto'/>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground},
        headerTintColor: theme.title
        }}>
          <Stack.Screen name='Index' options={{ title: "Home", headerShown: false}}/>
          <Stack.Screen name='GameHistory' options={{ title: "Game History" }}/>
          <Stack.Screen name='NewGame' options={{ title: "New Game"}}/>
          <Stack.Screen name='StatSelection' options={{ title: "Stat Selection"}}/>
          <Stack.Screen name='TeamsCreation' options={{ title: "Teams Creation"}}/>
          <Stack.Screen name='StatKeeping' options={{ title: "Score Keeping", headerShown: false}}/>
          <Stack.Screen name='LiveBoxscore' options={{ title : "Live Stats"}}/>
          <Stack.Screen name='FinalBoxscore' options={{ title : "Final Score", headerShown: false}}/>
          <Stack.Screen name='(auth)/Login' options={{ title : "Login" }}/>
          <Stack.Screen name='(auth)/Register' options={{ title : "Register" }}/>

      </Stack>
    </>
  )
}
// I have a confirmation i want to make before you end games but that doesnt need its own page
// I think i can probably use the same code for pickup and regulation score keeping for the most part so i might be able to get away with just one file for that
// I can also probably get away with just using the final boxscore for when you expand the game history page to look at a boxscore but we'll see

export default RootLayout

const styles = StyleSheet.create({})