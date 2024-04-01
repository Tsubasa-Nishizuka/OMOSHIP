import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.Input} value='Email address' />
        <TextInput style={styles.Input} value='Password' />
        <View style={styles.button}>
            <Text style={styles.buttonlabel}>SUBMIT</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footertext}>Not registered?</Text>
            <Text style={styles.footerLink}>Signup here!</Text>
        </View>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  Input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
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
    paddingHorizontal: 72
  },
  footer: {
    flexDirection: 'row'
  },
  footertext: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8

  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }

})

export default LogIn
