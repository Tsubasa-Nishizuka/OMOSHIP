import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ECFooter = (): JSX.Element => {
  return (
   <View style={styles.BuySection}>
    <TouchableOpacity><Text style={styles.LookCart}>🛒</Text></TouchableOpacity>
    <TouchableOpacity style={styles.CartButton}><Text style={styles.CartButtonText}>カートに追加</Text></TouchableOpacity>
    <TouchableOpacity style={styles.BuyButton}><Text style={styles.BuyButtonText}>購入する</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  BuySection: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: -1 },
    elevation: 8
  },
  LookCart: {
    fontSize: 30,
    marginLeft: 10
  },
  CartButton: {
    backgroundColor: '#479BFD',
    marginLeft: 10,
    width: '41%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  CartButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'

  },
  BuyButton: {
    backgroundColor: '#000000',
    borderWidth: 1,
    width: '41%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  BuyButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default ECFooter
