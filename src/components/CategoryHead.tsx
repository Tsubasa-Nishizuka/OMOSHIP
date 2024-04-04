import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryHead = (): JSX.Element => {
  return (
    <View>
      <View style={styles.inner2}>
        <TouchableOpacity style={styles.InputButtonStyle}>
      <Text style={styles.Input2}>アイテム</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.InputButtonStyle}>
      <Text style={styles.Input2}>ブランド</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.InputButtonStyle}>
      <Text style={styles.Input2}>ショップ</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inner2: {
    paddingVertical: 11,
    paddingHorizontal: 3,
    backgroundColor: '#D6E1F5',
    flexDirection: 'row'
  },
  InputButtonStyle: {
    paddingHorizontal: 3
  },
  Input2: {
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 15,
    height: 30,
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold'
  }

})

export default CategoryHead
