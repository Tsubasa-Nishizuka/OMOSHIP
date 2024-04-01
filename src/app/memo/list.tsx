import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemolistItem from '../../components/MemolistItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const List = (): JSX.Element => {
  return (
         <View style={styles.container}>
           <Header />
           <View>
           <MemolistItem />
           <MemolistItem />
           <MemolistItem />
           </View>
           <CircleButton>
           <Icon name='plus' size={40} color='#ffffff' />
           </CircleButton>
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
