import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Link } from 'expo-router'

const Footer = (): JSX.Element => {
  return (
              <View style={styles.header}>
                <Link href='/memo/top' asChild replace>
                <TouchableOpacity style={styles.foooterflame}>
                  <Text style={styles.footerItem}>①</Text>
                  </TouchableOpacity></Link>
                  <Link href='/search/searchItem' asChild replace>
                  <TouchableOpacity style={styles.foooterflame}>
                  <Text style={styles.footerItem}>②</Text>
                  </TouchableOpacity></Link>
                  <Link href='/Commerce/LiveCommerce' asChild replace>
                  <TouchableOpacity style={styles.foooterflame}>
                  <Text style={styles.footerItem}>③</Text>
                  </TouchableOpacity></Link>
                  <TouchableOpacity style={styles.foooterflame}>
                  <Text style={styles.footerItem}>④</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.foooterflame}>
                  <Text style={styles.footerItem}>⑤</Text>
                  </TouchableOpacity>

                  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  foooterflame: {
    alignItems: 'center'
  },
  footerItem: {
    fontSize: 36,
    lineHeight: 80,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,1)',
    marginHorizontal: 26,
    marginTop: 0
  }
})

export default Footer
