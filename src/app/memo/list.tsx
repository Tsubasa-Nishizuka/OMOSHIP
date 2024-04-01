import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemolistItem from '../../components/MemolistItem'
import CircleButton from '../../components/CircleButton'

const List = (): JSX.Element => {
  return (
         <View style={styles.container}>
           <Header />
           <View>
           <MemolistItem />
           <MemolistItem />
           <MemolistItem />
           </View>
           <CircleButton>a</CircleButton>
         </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffff'
  }

})

export default List
