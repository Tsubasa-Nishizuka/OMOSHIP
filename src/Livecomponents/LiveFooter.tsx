import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import CommerceComment from '../Livecomponents/CommerceComment'
import ItemSlider from '../Livecomponents/ItemSlider'

const LiveFooter = (): JSX.Element => {
  return (
<LinearGradient colors={['rgba(rgba(0, 0, 0, 0.001)', 'rgba(rgba(0, 0, 0, 0.15)', 'rgba(rgba(0, 0, 0, 0.05)', 'rgba(rgba(0, 0, 0, 0.001)']} style={styles.LiveFooter}>
  <CommerceComment />
  <ItemSlider />
  <View style={styles.inner1}>
  <TouchableOpacity style={styles.ButtonInner}><Text style={styles.Submit}>🏠</Text></TouchableOpacity>
  <TouchableOpacity style={styles.Input0}><Text>✍️↓</Text></TouchableOpacity>
    <TextInput style={styles.Input1}
           value='すてきなコメントを書く'
           autoCapitalize= 'none'
           keyboardType='default'
           placeholder='検索'
           textContentType='none'
           />
    <TouchableOpacity style={styles.ButtonInner}><Text style={styles.Submit}>🛒</Text></TouchableOpacity>
    </View>
</LinearGradient>

  )
}

const styles = StyleSheet.create({
  LiveFooter: {
    paddingHorizontal: 7
  },
  inner1: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 0
  },
  Input0: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderTopLeftRadius: 20,
    backgroundColor: '#ffffff',
    height: 38,
    width: '13%',
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A6A6A'
  },
  Input1: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderBottomRightRadius: 20,
    backgroundColor: '#ffffff',
    height: 38,
    width: '62%',
    padding: 8,
    fontSize: 16,
    color: '#6A6A6A'
  },
  ButtonInner: {
    width: '13%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  Submit: {
    fontSize: 30,
    marginHorizontal: 5
  }

})

export default LiveFooter
