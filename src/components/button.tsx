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
    backgroundColor: '#2680EB',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 12
  },
  buttonlabel: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 120,
    fontWeight: 'bold'
  }
})

export default Button
