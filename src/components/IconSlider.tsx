import { View, Text, StyleSheet, TouchableOpacity, type ViewStyle } from 'react-native'

interface Props {
  children: string
  style?: ViewStyle
  Brand?: string
}

const IconSlider = (props: Props): JSX.Element => {
  const { children, style, Brand } = props
  return (
    <View>
          <View>
         <View style={styles.TitleStyle}>
         <Text style={styles.Title}>{children}</Text>
         </View>
       <View style={styles.SliderStyle}>
         <View style={styles.SliderItem}>
           <TouchableOpacity>
             <Text style={[styles.SliderInput, style]}>画像</Text>
           </TouchableOpacity>
           <Text style={styles.SliderItemTitle}>{Brand}</Text>
         </View>
         <View style={styles.SliderItem}>
           <TouchableOpacity>
             <Text style={[styles.SliderInput, style]}>画像</Text>
           </TouchableOpacity>
           <Text style={styles.SliderItemTitle}>{Brand}</Text>
         </View>
         <View style={styles.SliderItem}>
           <TouchableOpacity>
             <Text style={[styles.SliderInput, style]}>画像</Text>
           </TouchableOpacity>
           <Text style={styles.SliderItemTitle}>{Brand}</Text>
         </View>
      </View>
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
    paddingLeft: 10
  },
  SliderInput: {
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 3,
    height: 80,
    width: 80,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  SliderItemTitle: {
    paddingTop: 5,
    color: '#ffffff',
    fontWeight: 'bold'
  }
})

export default IconSlider
