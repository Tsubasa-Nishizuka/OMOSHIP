import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'

const LiveTop = (): JSX.Element => {
  return (
  <View style={styles.TopFlame}>
    <View style={styles.TopMenu}>
        <View style={styles.TopMenu2}>
          <TouchableOpacity style={styles.Icon}>
            <Text>a</Text>
          </TouchableOpacity>
        <View>
        <Text style={styles.UserId}>userID</Text>
          <View style={styles.liveinfo}>
        <Text style={styles.Livepeo1}>・LIVE</Text>

          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.foollowbutton}>
      <Text style={styles.foollowText}>＋フォロー</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.LivePeople}>
        <Text style={styles.Livepeo2}>👤</Text>
        <Text style={styles.Livepeo2}>1.0K</Text>
    </View>
    <TouchableOpacity>
    <Text style={styles.topIcon2}>×</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  TopFlame: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  TopMenu: {
    left: 10,
    top: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '60%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Icon: {
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    marginLeft: 6,
    marginVertical: 5,
    borderRadius: 20
  },
  UserId: {
    fontSize: 16,
    marginLeft: 5,
    color: '#ffffff'
  },
  liveinfo: {
    flexDirection: 'row'
  },
  TopMenu2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  foollowbutton: {
    borderRadius: 17,
    marginRight: 6,
    backgroundColor: '#53A8D8'
  },
  foollowText: {
    color: '#ffffff',
    lineHeight: 28,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  Livepeo1: {
    fontSize: 13,
    marginLeft: 5,
    color: 'red'
  },
  Livepeo2: {
    fontSize: 13,
    marginHorizontal: 2,
    color: '#ffffff'
  },

  topIcon2: {
    top: 10,
    right: 10,
    fontSize: 25,
    color: 'gray'
  },
  LivePeople: {
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    top: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10
  }
})

export default LiveTop
