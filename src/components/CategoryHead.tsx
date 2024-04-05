import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { Link } from 'expo-router'

const CategoryHead = (): JSX.Element => {
  return (
    <View style={styles.flame}>
      <ScrollView style={styles.inner2} horizontal={true}>
         <Link href='/search/searchItem' asChild replace>
           <TouchableOpacity style={styles.InputButtonStyle}>
            <Text style={styles.Input2}>アイテム</Text>
           </TouchableOpacity>
         </Link>
         <Link href='/search/searchBrand' asChild replace>
           <TouchableOpacity style={styles.InputButtonStyle}>
             <Text style={styles.Input2}>ブランド</Text>
           </TouchableOpacity>
         </Link>
         <Link href='/search/searchShop' asChild replace>
           <TouchableOpacity style={styles.InputButtonStyle}>
             <Text style={styles.Input2}>ショップ</Text>
          </TouchableOpacity>
         </Link>
         <Link href='/search/searchUser' asChild replace>
           <TouchableOpacity style={styles.InputButtonStyle}>
             <Text style={styles.Input2}>ユーザー</Text>
           </TouchableOpacity>
         </Link>
         <Link href='/search/searchUser' asChild replace>
          <TouchableOpacity style={styles.InputButtonStyle}>
            <Text style={styles.Input2}>ショート</Text>
       </TouchableOpacity>
         </Link>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  flame: {
    height: 50
  },
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
    paddingHorizontal: 10,
    fontSize: 16.5,
    fontWeight: 'bold'
  }

})

export default CategoryHead
