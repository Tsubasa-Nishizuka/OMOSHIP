import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'
import LiveTop from '../../Livecomponents/LiveTop'
import LiveGenre from '../../Livecomponents/LiveGenre'

const LiveCommerce = (): JSX.Element => {
  return (
<View style={styles.container}>
    <LiveTop />
    <LiveGenre />
    <View style={styles.Flame}>
        <View style={styles.Position}>
            <View style={styles.Icon}><Text>あ</Text></View>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <View style={styles.Icon}><Text>あ</Text></View>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <View style={styles.Icon}><Text>あ</Text></View>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <View style={styles.Icon}><Text>あ</Text></View>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <View style={styles.Icon}><Text>あ</Text></View>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
    </View>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  Flame: {
    backgroundColor: 'blue',
    flex: 1.0,
    justifyContent: 'flex-end'
  },
  Position: {
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
    bottom: 100,
    marginBottom: 5
  },
  Icon: {
    height: 25,
    width: 25,
    backgroundColor: '#ffffff',
    borderRadius: 13
  },
  Text:{
    marginLeft: 5,
  }
})

export default LiveCommerce
