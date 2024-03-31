import { StatusBar } from 'expo-status-bar'
import { JSXElementConstructor } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang>a</Hello>
      <Hello style={{ fontSize: 16 }}>world</Hello>
      <Text>Open up App.tsx to start working on your app!!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
