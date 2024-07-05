import { Button, Text, View } from "react-native"

const Login = (props) => {
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>

      <Button
        title="Go to Home"
        onPress={() => {
          props.navigation.navigate('Home')
        }}
      />
    </View>
  )
}

export default Login