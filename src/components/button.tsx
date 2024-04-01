import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  label: string
  onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={ onPress } style={styles.button}>
    <Text style={styles.buttonlabel}>{label}</Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 24
  },
  buttonlabel: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 72,
    fontWeight: 'bold'
  }
})

export default Button
