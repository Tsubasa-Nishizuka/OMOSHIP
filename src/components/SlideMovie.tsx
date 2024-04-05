import {
  View, Text, StyleSheet, TouchableOpacity, type ViewStyle, ScrollView
} from 'react-native'

interface Props {
  children: string
  style?: ViewStyle
  Brand?: string
}

const SlideMovie = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View>
      <View>
         <View style={styles.TitleStyle}>
           <Text style={styles.Title}>{children}</Text>
         </View>
      <ScrollView style={styles.SliderStyle} horizontal={true}>
        <View style={styles.SliderItem}>
          <TouchableOpacity style={styles.SliderInput}>
            <Text>画像</Text>
          </TouchableOpacity>
            <View style={styles.SliderItemTitleBox}>
          <View style={styles.ItemBoxProp}>
          <TouchableOpacity>
            <View style={styles.Iconbutton}></View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Infobutton}>ℹ︎</Text>
            </TouchableOpacity>
          </View>
            </View>
         </View>
         <View style={styles.SliderItem}>
          <TouchableOpacity style={styles.SliderInput}>
            <Text>画像</Text>
          </TouchableOpacity>
            <View style={styles.SliderItemTitleBox}>
          <View style={styles.ItemBoxProp}>
          <TouchableOpacity>
            <View style={styles.Iconbutton}></View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Infobutton}>ℹ︎</Text>
            </TouchableOpacity>
          </View>
            </View>
         </View>
         <View style={styles.SliderItem}>
          <TouchableOpacity style={styles.SliderInput}>
            <Text>画像</Text>
          </TouchableOpacity>
            <View style={styles.SliderItemTitleBox}>
          <View style={styles.ItemBoxProp}>
          <TouchableOpacity>
            <View style={styles.Iconbutton}></View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Infobutton}>ℹ︎</Text>
            </TouchableOpacity>
          </View>
            </View>
         </View>
         <View style={styles.SliderItem}>
          <TouchableOpacity style={styles.SliderInput}>
            <Text>画像</Text>
          </TouchableOpacity>
            <View style={styles.SliderItemTitleBox}>
          <View style={styles.ItemBoxProp}>
          <TouchableOpacity>
            <View style={styles.Iconbutton}></View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Infobutton}>ℹ︎</Text>
            </TouchableOpacity>
          </View>
            </View>
         </View>
         <View style={styles.SliderItem}>
          <TouchableOpacity style={styles.SliderInput}>
            <Text>画像</Text>
          </TouchableOpacity>
            <View style={styles.SliderItemTitleBox}>
          <View style={styles.ItemBoxProp}>
          <TouchableOpacity>
            <View style={styles.Iconbutton}></View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Infobutton}>ℹ︎</Text>
            </TouchableOpacity>
          </View>
            </View>
         </View>
      </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TitleStyle: {
    paddingTop: 35,
    paddingLeft: 12,
    alignSelf: 'flex-start'
  },
  Title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  SliderStyle: {
    flexDirection: 'row',
    paddingTop: 15
  },
  SliderItem: {
    paddingLeft: 9

  },
  SliderInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 157,
    width: 110,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  SliderItemTitleBox: {
    backgroundColor: '#161616',
    fontWeight: 'bold',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  ItemBoxProp: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 4

  },
  Iconbutton: {
    height: 35,
    width: 35,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  Infobutton: {
    color: '#ffffff',
    fontSize: 40
  }
}
)

export default SlideMovie
