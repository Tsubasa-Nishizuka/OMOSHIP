import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { Link, router } from 'expo-router'

import Header from '../../components/Header'
import Button from '../../components/button'

const handlePress = (): void => {
// 会員登録
  router.push('memo/list')
}

const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.Input} value='Email address' />
        <TextInput style={styles.Input} value='Password' />
        <Button label='登録する' onPress={handlePress} />
        <View style={styles.footer}>
            <Text style={styles.footertext}>Already registered?</Text>
            <Link href="/Auth/log_in" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Log in.</Text>
              </TouchableOpacity>
            </Link>
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

export default Signup
