import { Pressable, Text, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../constants/Colors'

const ThemedLinkButton = ({ href, children }) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light
  const router = useRouter()


  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: theme.button,
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        },
        pressed && { opacity: 0.8 }
      ]}
    >
      <Text style={[{ color: theme.buttonText, fontSize: 16 }]}>
        {children}
      </Text>
    </Pressable>
  )
}

export default ThemedLinkButton
