import { View, StyleSheet, ScrollView } from 'react-native'

import SearchHead from '../../components/Searchhead'
import CategoryHead from '../../components/CategoryHead'
import Footer from '../../components/Footer'
import SearchListIcon from '../../components/SearchListIcon'

const searchUser = (): JSX.Element => {
  return (

<View style={styles.container}>
  <SearchHead />
    <CategoryHead />
      <ScrollView>
        <SearchListIcon />
        <SearchListIcon />
        <SearchListIcon />
       </ScrollView>
       <Footer />
</View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})

export default searchUser
