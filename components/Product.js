import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = (props) => {

  const item = props.item
  return (
    <View style={{alignItems:'center', borderBlockColor:'orange', borderBottomWidth:2, padding:10}}>
        <Text style={{fontSize:24}}>{item.name}</Text>
        <Text style={{fontSize:24}}>{item.color}</Text>
        <Text style={{fontSize:24}}>{item.price}</Text>

        <Image 
          source={{uri: item.image}}
          style={{width:200, height:200}}
        />

        <Button  
          title='Add to Cart'
        />
        </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})