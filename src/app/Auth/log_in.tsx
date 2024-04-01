import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/button'

const handlePress = (): void => {
  // ログイン
  router.replace('memo/list')
}

const LogIn = (): JSX.Element => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.Input}
          value={email}
        onChangeText={(text) => { setEmail(text) }}
        autoCapitalize= 'none'
        keyboardType='email-address'
        placeholder='メールアドレス'
        textContentType='emailAddress'
        />
        <TextInput
         style={styles.Input}
         value={password}
         onChangeText={(text) => { setPassword(text) }}
         autoCapitalize= 'none'
         secureTextEntry
         placeholder='パスワード'
         textContentType='password'
         />
        <Button label='ログイン' onPress={handlePress} />
        <View style={styles.footer}>
            <Text style={styles.footertext}>Not registered?</Text>
            <Link href='/Auth/sign_up' asChild>
            <TouchableOpacity>
            <Text style={styles.footerLink}>Signup here!</Text>
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
