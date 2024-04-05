import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const searchListIcon = (): JSX.Element => {
  return (
    <View>
        <TouchableOpacity style={styles.listBox}>
            <View style={styles.listBox2}>
              <View style={styles.IconImage}>
                <Text style={styles.ImageText}>あ</Text>
              </View>
            <View style={styles.ListTextflame}>
              <Text style={styles.ListText}>あいうえお</Text>
              <Text style={styles.ListText}>あいうえお</Text>
            </View>
            </View>
            <View style={styles.buttonflame}>
              <TouchableOpacity style={styles.followbutton}>
                <Text style={styles.buttontext}>フォローする</Text>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  listBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 17
  },
  listBox2: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row'
  },
  ListText: {
    color: '#ffffff',
    fontSize: 18,
    marginVertical: 2
  },
  ImageText: {
    color: 'red'
  },
  IconImage: {
    height: 60,
    width: 60,
    backgroundColor: '#ffffff'
  },
  ListTextflame: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  buttonflame: {
    marginRight: 15,
    justifyContent: 'center'
  },
  followbutton: {
    backgroundColor: '#2680EB',
    paddingHorizontal: 25,
    borderRadius: 20
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 30,
    fontWeight: 'bold'
  }

})

export default searchListIcon
