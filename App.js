import React from 'react';
import { Button, Text, View } from 'react-native';


let age=18;
var email="abc@test.com"

function fruit(){
  return "apple";
}

const App = () => {

  return (
    <View>
      <Text style={{fontSize:30}}>hello</Text>
      <Button title='press here'></Button>

      <Text style={{fontSize:30}}>{age}</Text>
      <Text style={{fontSize:30}}>{email}</Text>
      <Text style={{fontSize:30}}>{fruit()}</Text>
      <Text style={{fontSize:30}}>{age===18? "you are 18":"you are not 18"}</Text>
    </View>
  );
}

export default App