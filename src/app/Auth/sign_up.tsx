import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../config'
import Button from '../../components/button'

const handlePress = (email: string, password: string): void => {
// 会員登録
  console.log(email, password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      router.replace('memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Alert.alert(message)
    })
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
        <Text style={styles.title}>Omoship</Text>
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
        <Button label='登録する' onPress={() => { handlePress(email, password) } } />
        <View style={styles.footer}>
            <Text style={styles.footertext}>すでに登録済みですか?</Text>
            <Link href="/Auth/log_in" asChild replace>
              <TouchableOpacity>
                <Text style={styles.footerLink}>ログイン</Text>
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
    backgroundColor: '#000000'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
    paddingTop: 92.5
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
    color: '#ffffff'
  },
  Input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
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
    marginRight: 8,
    color: '#ffffff'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#2680EB'
  }
})

export default Signup
