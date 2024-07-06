import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native"

const Login = (props) => {
  const [name, setName] = useState("")

  // const name = "navi";
  const age = "24";
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      
      <TextInput 
        placeholder="enter name"
        // onChangeText={(text)=>console.warn(text)}
        onChangeText={(text)=>setName(text)}
        style={{fontSize:25, borderColor:'#000', borderWidth: 2}}
      />
      <Button
        title="Go to Home"
        // onPress={() => {
        //   props.navigation.navigate('Home', {name: "sachin", age:20})
        // }}
        onPress={() => {
          props.navigation.navigate('Home', {name, age})
        }}
      />
    </View>
  )
}

export default Login