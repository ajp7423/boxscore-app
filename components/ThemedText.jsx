import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light

  return <Text style={[{ color: theme.text }, style]} {...props} />
}

export default ThemedText
