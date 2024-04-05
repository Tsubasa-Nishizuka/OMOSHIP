import { View, StyleSheet, ScrollView } from 'react-native'

import SearchHead from '../../components/Searchhead'
import CategoryHead from '../../components/CategoryHead'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

const Home = (): JSX.Element => {
  return (

    <View style={styles.container}>
       <SearchHead />
       <CategoryHead />
       <ScrollView>
        <SearchBox />
       </ScrollView>
       <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})

export default Home
