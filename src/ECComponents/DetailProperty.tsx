import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const DetailProperty = (): JSX.Element => {
  return (
   <View style={styles.DetailList}>
    <View style={styles.DetailList1}>
      <View>
        <Text>販売価格</Text>
        <View style={styles.FlexDirection}>
        <Text>¥</Text><Text>10,000</Text><Text>（税込）</Text>
        </View>
      </View>
      <View>
      <View>
        <View></View><View><Text>在庫数</Text></View>
        <View><Text>100</Text></View>
        </View>
        <View style={styles.FlexDirection}>
            <TouchableOpacity><AntDesign name='minus' /></TouchableOpacity><TouchableOpacity><Text>1</Text></TouchableOpacity><TouchableOpacity><AntDesign name='plus' /></TouchableOpacity>
       </View>
       </View>
    </View>
    <View style={styles.DetailList2}>
      <Text>
        商品名 配信タイトルを3行で記入します。商品名 配信タイトルを3行で記入します。商品名 配信タイトルを3行で記入します。
        </Text>
      </View>
    <View style={styles.DetailList3}>
        <View>
            <View></View>
            <Text>ブランドorショップ名</Text>
            <Text>キャッチコピー</Text>
        </View>
        <AntDesign name='right' />
    </View>
    <View style={styles.DetailList4}>
        <Text>アイテム説明</Text><AntDesign name='down' />
    </View>
    <View style={styles.DetailList5}>
    <Text>アイテムサイズ</Text><AntDesign name='down' />
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  DetailList: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 0,
    borderWidth: 1,
    borderRadius: 5
  },
  DetailList1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  DetailList2: {
    borderBottomWidth: 1
  },
  DetailList3: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  DetailList4: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  DetailList5: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  FlexDirection: {
    flexDirection: 'row'
  }
})

export default DetailProperty
