import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import MemolistItem from '../components/MemolistItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
  return (
         <View style={styles.container}>
           <Header />
           <View>
           <MemolistItem />
           <MemolistItem />
           <MemolistItem />
           </View>
           <CircleButton>＋</CircleButton>
         </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffff'
  }

})

export default Index
