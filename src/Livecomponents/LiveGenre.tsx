import { View, Text, StyleSheet } from 'react-native'

const LiveCommerce = (): JSX.Element => {
  return (
    <View style={styles.Genre}>
        <View style={styles.Genre1}><Text style={styles.GenreText1}>大ジャンル名</Text></View>
        <View style={styles.Genre2}><Text style={styles.GenreText2}>小ジャンル名</Text></View>
        <View style={styles.Genre3}><Text style={styles.GenreText3}>性別</Text></View>
        <View style={styles.Genre4}><Text style={styles.GenreText4}>地域</Text></View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  Genre: {
    top: 10,
    flexDirection: 'row',
    left: 5
  },
  Genre1: {
    top: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    left: 5
  },
  GenreText1: {
    color: '#ffffff',
    margin: 2,
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold'
  },
  Genre2: {
    marginLeft: 7,
    top: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    left: 5
  },
  GenreText2: {
    color: '#ffffff',
    margin: 2,
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold'
  },
  Genre3: {
    marginLeft: 7,
    top: 5,
    backgroundColor: '#D446E0',
    borderRadius: 10,
    left: 5
  },
  GenreText3: {
    color: '#ffffff',
    margin: 2,
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold'
  },
  Genre4: {
    marginLeft: 7,
    top: 5,
    backgroundColor: '#FFA700',
    borderRadius: 10,
    left: 5
  },
  GenreText4: {
    color: '#ffffff',
    margin: 2,
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default LiveCommerce
