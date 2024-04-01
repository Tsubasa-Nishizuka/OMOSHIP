import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemolistItem from '../../components/MemolistItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogoutButton from '../../components/logout_button'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogoutButton /> }
    })
  }, [])

  return (
         <View style={styles.container}>
           <View>
           <MemolistItem />
           <MemolistItem />
           <MemolistItem />
           </View>
           <CircleButton onPress={handlePress}>
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
