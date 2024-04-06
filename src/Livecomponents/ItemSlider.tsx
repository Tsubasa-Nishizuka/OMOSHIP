import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const ItemSlider = (): JSX.Element => {
  return (
 <ScrollView style={styles.ItemSlider} horizontal={true}>
        <TouchableOpacity>
            <View style={styles.ItemImage}></View>
            <View style={styles.ItemPrice}><Text style={styles.Price}>¥1,000,000</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.ItemImage}></View>
            <View style={styles.ItemPrice}><Text style={styles.Price}>¥1,000,000</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.ItemImage}></View>
            <View style={styles.ItemPrice}><Text style={styles.Price}>¥1,000,000</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.ItemImage}></View>
            <View style={styles.ItemPrice}><Text style={styles.Price}>¥1,000,000</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.ItemImage}></View>
            <View style={styles.ItemPrice}><Text style={styles.Price}>¥1,000,000</Text></View>
        </TouchableOpacity>
</ScrollView>
  )
}

const styles = StyleSheet.create({
  ItemSlider: {
    flexDirection: 'row',
    shadowColor: '#000000',
    paddingTop: 5,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 10 }
  },
  ItemImage: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    marginLeft: 7
  },
  ItemPrice: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#000000',
    height: 20,
    width: 80,
    marginLeft: 7
  },
  Price: {
    color: '#ffffff',
    fontSize: 12,
    marginHorizontal: 6,
    marginVertical: 2
  }
})

export default ItemSlider
