import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {

const [name, setName] = useState("Navyum");
let data = "gogii"

const testName = () => {
  setName("Navy");
  data = "gogigogi"
}

  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight:'800' }}>state in RN</Text>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Button 
        title='update name'
        onPress={() => setName('Nav')}
      />
      <Button 
        title='update me'
        onPress={testName}
      />
    </View> 
  );
}



export default App