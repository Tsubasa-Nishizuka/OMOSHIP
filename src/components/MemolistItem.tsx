import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from './Icon'

const MemoListItem = (): JSX.Element => {
  return (
    <View>
    <View style={styles.memolistItem}>
        <View >
            <Text style={styles.memolistItemTitle}>買い物リスト</Text>
            <Text style={styles.memolistItemDate}>2024年4月1日10:00</Text>
        </View>
        <TouchableOpacity>
            <Icon name='delete' size={32} color='#B0B0B0' />
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memolistItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba( 0, 0, 0, 0.15)'
  },
  memolistItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memolistItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
