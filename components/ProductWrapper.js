import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'


const ProductWrapper = ({navigation}) => {

  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white ',
      price: 30000,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Apple I Phone',
      color: 'Black ',
      price: 20000,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Chineeeseee Mobile',
      color: 'Orange ',
      price: 18000,
      image: 'https://picsum.photos/200',
    },
  ]


  return (
    <View style={styles.container}>
      <Button title='Go to User List' onPress={()=> navigation.navigate("User")}/>
      <Header />
      <ScrollView>
      {
        products.map((item) => <Product item={item} /> )
      }
      </ScrollView>
      

    </View>
  )
}

export default ProductWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})