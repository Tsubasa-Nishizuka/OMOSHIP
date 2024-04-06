import { View, StyleSheet } from 'react-native'
import { Entypo, Foundation } from '@expo/vector-icons'

const DetailTopButton = (): JSX.Element => {
  return (
    <View style={styles.ItemDetail}>
       <View>
        <Entypo style={styles.arrow} name='chevron-thin-left' size={25} color={'#ffffff'}/>
       </View>
       <View style={styles.Buttonflame}>
       <View style={styles.ButtonSet}>
        <View style={styles.ImageButton}>
            <Entypo name='images' size={25} color={'#53A8D8'}/>
            </View>
        <View style={styles.PlayButton}>
            <Foundation name='play-video' size={30} color={'#FE7878'} />
        </View>
        </View>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
  ItemDetail: {
    flexDirection: 'row',
    paddingTop: 5
  },
  arrow: {
    marginLeft: 10,
    marginTop: 5
  },
  Buttonflame: {
    width: '80%',
    alignItems: 'center'
  },
  ButtonSet: {
    flexDirection: 'row',
    marginRight: 15,
    marginBottom: 5
  },
  ImageButton: {
    marginRight: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#ffffff',
    padding: 5,
    width: 70,
    height: 35
  },
  PlayButton: {
    marginLeft: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ffffff',
    padding: 2.5,
    width: 70,
    height: 35
  }
})

export default DetailTopButton
