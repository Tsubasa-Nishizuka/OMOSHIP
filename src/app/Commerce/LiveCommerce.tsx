import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

import React from 'react'
import LiveTop from '../../Livecomponents/LiveTop'
import LiveGenre from '../../Livecomponents/LiveGenre'
import LiveFooter from '../../Livecomponents/LiveFooter'

const LiveCommerce = (): JSX.Element => {
  return (<View style={styles.container}><SafeAreaProvider>
    <SafeAreaView>
    <><Stack.Screen
          options={{
            headerTitle: 'トーク',
            headerShown: false
          }} />
          <View>
              <View style={styles.LiveHeaderPart}>
                  <LiveTop />
                  <LiveGenre />
              </View>
          </View></>
          </SafeAreaView>
    </SafeAreaProvider>
    <SafeAreaProvider style={styles.container2}>
        <SafeAreaView>
        <View style={styles.LiveFooterPart}>
              <LiveFooter />
              </View>
        </SafeAreaView>
    </SafeAreaProvider>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1
  },
  container2: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    justifyContent: 'flex-end'
  },

  LiveHeaderPart: {
    top: 15

  },
  LiveFooterPart: {
    position: 'relative',
    bottom: 0
  }

})

export default LiveCommerce
