import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import ExStyles from './style'



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


// props in RN
// {
// // const App = () => {
// //   const [name, setName] = useState(second)
// //   // let name = "Navyum";
// //   return (
// //     <View>
// //       <Text style={{ fontSize: 30 }}>props in RN</Text>

// //       <Button
// //         title='update name'
// //         onPress={() => setName('Nav')}
// //       />
// //       <User
// //         name={name}
// //         age={24}
// //       />
// //     </View>
// //   )
// // }


// // const User = (props) => {
// //   console.warn(props.name);
// //   return (
// //     <View style={{ backgroundColor: 'green', padding: 5 }}>
// //       <Text style={{ fontSize: 30 }}>Child component
// //         {props.name}
// //       </Text>
// //     </View>
// //   )
// // }
// }


// Styles
// {
// const App = () => {

//   return(
//     <View>
//       <Text style={{ fontSize: 30 }}>Styles in RN</Text>
//       <Text style={{ fontSize: 30 }}>Styles in RN</Text>
//       <Text style={styles.textbox}>Styles in RN</Text>
//       <Text style={ExStyles.textbox}>Styles in RN</Text>
//       <Text style={[styles.textbox, ExStyles.textbox, {marginTop:20}]}>Styles in RN</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//   textbox: {
//     color: '#fff',
//     fontSize:25,
//     backgroundColor: 'blue',
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 10,
//     textAlign: 'center',
//     height: 100,
//     textAlignVertical: 'center',
//     borderColor:'red',
//     borderWidth: 2
//   }
// })
// }


// Handle Text Input 
// {
// const App = () => {
//   const [name, setName] = useState("")

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>InputText in RN</Text>
//       <Text style={{ fontSize: 30 }}>Your name is : {name}</Text>

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter your name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <Button 
//         title='clear Input Valur'
//         onPress={() => setName("")}
//       />
//     </View>
//   )
// }
// }


// Simple Form
// {
// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [display, setDisplay] = useState(false)

//   const resetFormData = () => {
//     setDisplay(false);
//     setEmail("")
//     setName("")
//     setPassword("")
//   }


//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Simple Form in RN</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Name'
//         onChangeText={(text) => setName(text)}
//         value={name}
//       />

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Email'
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Password'
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry={true}
//       />

//       <View style={{marginBottom:10}}>
//         <Button
//           title='Print details'
//           onPress={() => setDisplay(true)}
//         />
//       </View>

//       <View>
//         <Button
//           title='Clear details'
//           onPress={resetFormData}
//         />
//       </View>

//       <View>
//         {
//           display ? 
//           <View>
//             <Text style={{fontSize:25}}>Username: {name}</Text>
//             <Text style={{fontSize:25}}>Email: {email}</Text>
//             <Text style={{fontSize:25}}>Password: {password}</Text>
//           </View>
//           : null
//         }
//       </View>

//     </View>
//   )
// }
// }


// List 

const users = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'cina',
  },
  {
    id: 3,
    name: 'no',
  },
  {
    id: 4,
    name: 'bita',
  }
]


const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>List with Flatlist Component</Text>
      <FlatList 
        data={users}    // ye array me hi hoga
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}  // ye data ko render kar dega
        keyExtractor={(item)=>item.id}   // ye kisi unique ke liye work me lete hai
      />
    </View>
  )
};

const styles = StyleSheet.create({
  item:{
    fontSize:24,
    padding:10,
    color:"#fff",
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth:1,
    margin:10
  }
})
export default App