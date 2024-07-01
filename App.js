import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';




// state in RN
// const App = () => {

// const [name, setName] = useState("Navyum");
// let data = "gogii"

// const testName = () => {
//   setName("Navy");
//   data = "gogigogi"
// }

//   return (
//     <View>
//       <Text style={{ fontSize: 30, fontWeight:'800' }}>state in RN</Text>
//       <Text style={{ fontSize: 20 }}>{name}</Text>
//       <Button 
//         title='update name'
//         onPress={() => setName('Nav')}
//       />
//       <Button 
//         title='update me'
//         onPress={testName}
//       />
//     </View> 
//   );
// }


const App = () => {
  const [name, setName] = useState(second)
  // let name = "Navyum";
  return (
    <View>
      <Text style={{ fontSize: 30 }}>props in RN</Text>

      <Button
        title='update name'
        onPress={() => setName('Nav')}
      />
      <User
        name={name}
        age={24}
      />
    </View>
  )
}


const User = (props) => {
  console.warn(props.name);
  return (
    <View style={{ backgroundColor: 'green', padding: 5 }}>
      <Text style={{ fontSize: 30 }}>Child component
        {props.name}
      </Text>
    </View>
  )
}


export default App