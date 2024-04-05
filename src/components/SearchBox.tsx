import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

const SearchBox = (): JSX.Element => {
  return (

    <View style={styles.container}>
        <View style={styles.TitleStyle}>
            <Text style={styles.Title}>検索結果</Text>
        </View >
          <View style={styles.Searchsetting}>
            <TouchableOpacity style={styles.Searchsortbox}>
              <Text style={styles.SearchsortText}>絞り込み</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Searchbox}>
              <Text style={styles.SearboxText}>サイズ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Searchbox}>
              <Text style={styles.SearboxText}>カラー</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Searchbox}>
              <Text style={styles.SearboxText}>価格</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  TitleStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    alignSelf: 'flex-start'
  },
  Title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  Searchsetting: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignContent: 'center'

  },
  Searchsortbox: {
    borderWidth: 1.5,
    borderColor: '#6596FF',
    backgroundColor: '#6596FF',
    borderRadius: 17,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4

  },
  Searchbox: {
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 7,
    alignSelf: 'flex-start',
    marginHorizontal: 7,
    width: 85,
    paddingHorizontal: 7,
    paddingVertical: 3
  },
  SearchsortText: {
    color: '#ffffff',
    fontSize: 17,
    lineHeight: 24
  },
  SearboxText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 17,
    lineHeight: 24
  }

})

export default SearchBox
