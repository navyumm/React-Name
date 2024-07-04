import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import ExStyles from './style'
import { UserData } from './components/UserData';
import Student from './components/ClassComponent';



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
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   }
// ]


// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>List with Flatlist Component</Text>
//       <FlatList 
//         data={users}    // ye array me hi hoga
//         renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}  // ye data ko render kar dega
//         keyExtractor={(item)=>item.id}   // ye kisi unique ke liye work me lete hai
//       />
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:10
//   }
// })
// }


// Custom list
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'Rita',
//   }
// ]


// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>List with map function</Text>
//       <ScrollView style={{marginBottom:50}}>
//       {
//         users.map((item)=><Text style={styles.item}>{item.name}</Text>)
//       }
//       </ScrollView>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:10
//   }
// })
// }


// Dynamic Grid
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'Rita',
//   }
// ]

// const App = () => {
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Grid with Dynamic Data</Text>

//       <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
//       {/* <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text> */}
//       {
//         users.map((item)=><Text style={style.item}>{item.name}</Text>)
//       }
//       </View>

//     </View>
//   )
// }

// const style = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:5,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:5,
//     width:120,
//     height:120,
//     textAlignVertical:'center',
//     textAlign:'center'
//   }
// })
// }


// Component in loop Flatlist
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 2,
//     name: 'cina',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 3,
//     name: 'no',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 4,
//     name: 'bita',
//     email: 'test@gogi.com'
//   }
// ]

// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Component in loop Flatlist</Text>

//       <FlatList
//         data={users}
//         // renderItem={({ item }) => <View style={style.box}>
//         //   <Text style={style.item}>{item.name}</Text>
//         //   <Text style={style.item}>{item.email}</Text>
//         // </View>}
//         renderItem={({ item }) => <UserData item={item}/>}
//       />


//     </View>
//   )
// }
// // {
// // // const UserData = (props) => {
// // //   const { item } = props.item;
// // //   return (
// // //     <View style={style.box}>
// // //       <Text style={style.item}>{item.name}</Text>
// // //       <Text style={style.item}>{item.email}</Text>
// // //     </View>
// // //   )
// // // }

// // // const style = StyleSheet.create({
// // //   item: {
// // //     fontSize: 20,
// // //     margin: 10,
// // //     flex: 1,
// // //     margin: 2,
// // //     backgroundColor: 'orange',
// // //     textAlign: 'center'

// // //   },
// // //   box: {
// // //     flexDirection: 'row',
// // //     borderWidth: 2,
// // //     borderColor: 'black',
// // //     width: 100,
// // //     marginBottom: 10
// // //   }
// // // })
// // }
// }


// Section List in RN
// {
// const App = () => {
//   const users = [
//     {
//       id: '1',
//       name: 'John',
//       data: ["JS", "Reactjs", "RN"]
//     },
//     {
//       id: '2',
//       name: 'cina',
//       data: ["CS", "JS", "RN"]
//     },
//     {
//       id: '3',
//       name: 'no',
//       data: ["CS", "JS", "RN"]
//     },
//     {
//       id: '2',
//       name: 'bita',
//       data: ["CS", "JS", "RN"]
//     },
//   ]



//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Section List in RN</Text>

//       <SectionList
//         sections={users}
//         // keyExtractor={(item, index) => item.id}
//         renderItem={({ item }) => <Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
//         renderSectionHeader={({Section:{name}}) => (
//           <Text style={{fontSize:25, color:'red'}}>{name}</Text>
//         )}
//       />
//     </View>
//   )
// }
// }



// Class Component in React-Native
// {
// class App extends React.Component{
//   fruit = () => {
//     console.warn("Apple");
//   }
//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:30}}>Section List in RN</Text>
//         <TextInput 
//           placeholder='enter your name'
//         />
//         <Button 
//           title='Press me'
//           onPress={this.fruit}
//         />


//         <Student />
//       </View>
//       )
//       }
// }
// }


// State and Props in Class Component
// {
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name: 'Rahul',
//       // age: 20,
//       // address: 'Delhi'
//       }
//   }


//   updateName = (val) => {
//     this.setState({name: val})   // setState bydefault aati h class me 
//   }


//   render() {
//     return (
//       <View>
//         <Text style={{ fontSize: 30 }}>{this.state.name}</Text>
//         <TextInput
//           placeholder='enter your name'
//           onChangeText={
//             (text)=>this.updateName(text)
//             }
//         />
//         <Button
//           title='Press me'
//           onPress={this.fruit}
//         />


//         <Student 
//           name={this.state.name}
//         />
//       </View>
//     )
//   }
// }
// }



// Life Cycle with useEffect
const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
  console.warn('useEffect called')
  })
  
  return(
    <View>
      <Text style={{fontSize:30}}>LIfe Cycle with useEffect {count}</Text>
      <Button 
        title='update count'
        onPress={()=>setCount(count+1)}
      />
    </View>
  )
}

export default App