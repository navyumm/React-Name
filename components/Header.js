import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartData = useSelector((state) => state.reducer)
  const [cartItems, setCartItems] = useState(0)

  console.warn(cartData);

  useEffect(() => {
    setCartItems(cartData.length)
  }, [cartData])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'right', padding: 10, borderColor: 'orange' }}>
        <View style={{ borderColor: 'blue', borderRadius: 10, height: 40, width: 40 }}>
          <Text>
            {cartItems}
          </Text>
        </View>
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})