import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const CommerceComment = (): JSX.Element => {
  return (
    <View style={styles.Flame}>
    <View style={styles.Flame1}>
    <ScrollView style={styles.Flame2}>
        <View style={styles.Position}>
            <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text style={styles.TextInput}>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text style={styles.TextInput}>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text style={styles.TextInput}>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        </ScrollView>
        <TouchableOpacity><Text style={styles.Share}>⇧</Text></TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Flame: {
    justifyContent: 'flex-end'
  },
  Flame1: {
    flexDirection: 'row',
    paddingRight: 12
  },
  Flame2: {
  },
  Position: {
    width: '80%',
    alignItems: 'flex-start',
    marginLeft: 15,
    flexDirection: 'row',
    bottom: 0

  },
  Icon: {
    marginTop: 2,
    marginLeft: 5,
    height: 25,
    width: 25,
    backgroundColor: '#ffffff',
    borderRadius: 13,
    elevation: 2
  },
  Text: {
    marginLeft: 5
  },
  Share: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 5,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 0.3,
    shadowOffset: { width: 0, height: 0.2 },
    fontWeight: 'bold'
  },
  TextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: { width: 0.2, height: 0.2 }
  }
})

export default CommerceComment
