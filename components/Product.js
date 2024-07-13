import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'  // ye function simply call nhi ho sakta iske liye dispatch lagta hai.

const Product = (props) => {

  const item = props.item;

  const distpatch = useDispatch();

  const handleAddToCart = () => {
    // console.warn("action called", item);
    distpatch(addToCart(item));
  }
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
          onPress={()=>handleAddToCart(item)}
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