import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light

  return <Border style={[{ borderColor: theme.text }, style]} {...props} />
}

export default ThemedText
