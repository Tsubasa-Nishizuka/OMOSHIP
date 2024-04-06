import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Livecomment = (): JSX.Element => {
  return (
    <View style={styles.Flame}>
        <View style={styles.Position}>
            <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
            <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
        <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
        <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
        <View style={styles.Position}>
        <TouchableOpacity style={styles.Icon}><Text>あ</Text></TouchableOpacity>
            <View style={styles.Text}><Text>ここにコメントが2行で入ります。{'\n'}ここにコメントが入ります。</Text></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Flame: {
    backgroundColor: 'blue',
    flex: 1.0,
    justifyContent: 'flex-end'
  },
  Position: {
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
    bottom: 100,
    marginBottom: 5
  },
  Icon: {
    height: 25,
    width: 25,
    backgroundColor: '#ffffff',
    borderRadius: 13
  },
  Text: {
    marginLeft: 5
  }
})

export default Livecomment
