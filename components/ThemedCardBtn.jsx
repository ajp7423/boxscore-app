import React from 'react'
import { Pressable, Text, View, StyleSheet, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../constants/Colors'

const ThemedCardBtn = ({ href, headerText, bodyItems, style, headerStyle, bodyStyle }) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const router = useRouter()

  return (
    <Pressable
      onPress={() => router.push(href)}
      style={({ pressed }) => [
        styles.card,
        { borderColor: theme.text, backgroundColor: theme.button },
        pressed && { opacity: 0.8 },
        style,
      ]}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.button }]}>
        <Text style={[styles.headerText, { color: theme.buttonText }]}>{headerText}</Text>
      </View>

      {/* Body */}
      <View style={[styles.body, { backgroundColor: theme.background }]}>
        {bodyItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={[styles.bullet, { color: theme.text }]}>•</Text>
            <Text style={[styles.bodyText, { color: theme.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  )
}

export default ThemedCardBtn

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    width: '40%',       
    height: 200,        
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  header: {
    minHeight: 75,
    padding: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  body: {
    padding: 15,
    minHeight: 150, 
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bullet: {
    marginRight: 5,
    fontSize: 16,
  },
  bodyText: {
    fontSize: 16,
  },
})
