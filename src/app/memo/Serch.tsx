import { View, StyleSheet } from 'react-native'

import SearchHead from '../../components/Searchhead'
import CategoryHead from '../../components/CategoryHead'

const Search = (): JSX.Element => {
  return (

    <View style={styles.container}>
       <SearchHead />
       <CategoryHead />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})

export default Search
