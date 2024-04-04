import { View, StyleSheet, ScrollView } from 'react-native'

import SearchHead from '../../components/Searchhead'
import IconSlider from '../../components/IconSlider'
import SlideMovie from '../../components/SlideMovie'
import Footer from '../../components/Footer'

const Home = (): JSX.Element => {
  return (

    <View style={styles.container}>
       <SearchHead />
       <ScrollView>
       <View style={styles.TopMovieStyle}>
         <View style={styles.TopMovie}>
           </View>
           </View>
           <IconSlider Brand={'ブランド名'}>フォローブランド＆ショップ</IconSlider>
           <IconSlider style={{ borderRadius: 40 }} Brand={'アカウント名'}>マイインフルエンサー</IconSlider>
           <SlideMovie>配信中フォロー(ブランド＆ショップ)</SlideMovie>
           <SlideMovie>配信中フォロー(インフルエンサー)</SlideMovie>
           <SlideMovie>視聴中(アーカイブ)</SlideMovie>
           <SlideMovie>おすすめ</SlideMovie>
           <SlideMovie>マイリスト新着</SlideMovie>
           <SlideMovie>人気</SlideMovie>
       </ScrollView>
       <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  TopMovieStyle: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  TopMovie: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 480
  }

})

export default Home
