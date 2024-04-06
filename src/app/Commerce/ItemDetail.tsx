import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import DetailTopButton from '../../ECComponents/DetailTopButton'
import DetailProperty from '../../ECComponents/DetailProperty'
import ECFooter from '../../ECComponents/ECFooter'

const ItemDetail = (): JSX.Element => {
  return (<View style={styles.container}><SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <><Stack.Screen
    options={{
      headerTitle: 'トーク',
      headerShown: false
    }} />
   <View style={styles.container2}>
   <View style={styles.ItemImage}>
   </View>
   <View style={styles.ItemDetailFlame}>
   <DetailTopButton/>
   <ScrollView>
   <DetailProperty />
   </ScrollView>
   </View>
   <ECFooter />
   </View></>
    </SafeAreaView>
    </SafeAreaProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  container2: {
    flex: 1
  },
  ItemImage: {
    width: '100%',
    height: 448,
    backgroundColor: '#ffffff'
  },
  ItemDetailFlame: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1

  }
})

export default ItemDetail
