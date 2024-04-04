import { View, TextInput, StyleSheet } from 'react-native'

const SearchHead = (): JSX.Element => {
  return (
    <View>
       <View style={styles.inner1}>
       <TextInput style={styles.Input1}
        value='検索項目'
        autoCapitalize= 'none'
        keyboardType='default'
        placeholder='検索'
        textContentType='none'
        />
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  inner1: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#D6E1F5',
    borderBottomWidth: 0.2,
    borderColor: 'rgba(100, 100, 100, 1)',
  },
  Input1: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A6A6A'
  }
})

export default SearchHead
