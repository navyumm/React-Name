// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, Button, FlatList, Modal, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
// import ExStyles from './style'
// import { UserData } from './components/UserData';
// import Student from './components/ClassComponent';
// import style from './style';



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
// {
// const App = () => {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//   console.warn('useEffect called')
//   },[])

//   return(
//     <View>
//       <Text style={{fontSize:30}}>LIfe Cycle with useEffect {count}</Text>
//       <Button 
//         title='update count'
//         onPress={()=>setCount(count+1)}
//       />
//     </View>
//   )
// }
// }


// useEffect for state and props
// {
// const App = () => {

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);
//   const [number, setNumber] = useState(100);

//   // useEffect(() => {
//   //   console.warn("do some animation here :", count)
//   // }, [count, number])

//   // useEffect(() => {
//   //   console.warn("call api here : ", data)
//   // }, [data])

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}> useEffect in Component : {count} : {data} : {number}</Text>

//       <Button
//         title='update counter'
//         onPress={() => setCount(count + 1)}
//       />

//       <Button
//         title='update counter'
//         onPress={() => setData(data + 1)}
//       />

//       <Button
//         title='update counter'
//         onPress={() => setNumber(number + 1)}
//       />

//       <User 
//         info={{data, count}}
//       />


//     </View>
//   )
// }


// const User = () => {
//   // console.warn(props.info);

//   useEffect(()=> {
//     console.warn("run this code when data is updated");
//   },[props.info.data])

//   useEffect(()=> {
//     console.warn("run this code when counter is updated");
//   },[props.info.count])

//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}>user component</Text>


//       <Text style={{ fontSize: 30, color: 'orange' }}>data : {props.info.data}</Text>
//       <Text style={{ fontSize: 30, color: 'orange' }}>count : {props.info.count}</Text>

//     </View>
//   )

// }
// }


// Show/Hide component
// {
// const App = () => { 
//   const [show, setShow] = useState(true);

//   return(
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}> Show/Hide Component </Text>
//       <Button 
//         title='toggle component'
//         onPress={()=>setShow(!show)}
//       />
//       {
//         show === true? <User /> : null
//       }

//       <User />
//     </View>
//   )
// }

// const User = () => {

//   return(
//     <View>
//       <Text style={{fontSize:30, color:'green'}}>User Component</Text>
//     </View>
//   )
// }
// }



// useEffect for Unmount Component
// {
// const App = () => { 
//   const [show, setShow] = useState(true);

//   return(
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}> useEffect for Unmount Component </Text>
//       <Button 
//         title='toggle'
//         onPress={()=>setShow(!show)}
//       />
//       {
//         show ? <Student /> : null
//       }


//       <User />
//     </View>
//   )
// }

// const Student = () => {

//   let timer = setInterval(()=>{
//     console.warn("timer called");
//   }, 2000)

//   useEffect(() => {
//     // console.warn("useEffect called");
//     // return() => {console.warn("useEffect called for unmount")}
//     return() => clearInterval(timer)
//   })

//   return(
//     <View>
//       <Text style={{fontSize:30, color:'green'}}>Student Component</Text>
//     </View>
//   )
// }
// }



// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------



// Responsive UI with flex
// {
// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <View style={{flex:1, backgroundColor:'red', flexDirection:'row'}}>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//       </View>
//       <View style={{flex:1, backgroundColor:'green'}}>flex2</View>
//       <View style={{flex:1, backgroundColor:'orange'}}>flex3</View>

//       <TouchableHighlight>
//         <Text >Touchable</Text>
//       </TouchableHighlight>


//     </View>
//   )
// }
// }



// Radio Button
// {
// const App = () => {

//   const [selectedRadio, setSelectedRadio] = useState(1)
//   return (
//     <View style={style.main}>
//       <TouchableOpacity
//       onPress={() => setSelectedRadio(1)}
//       >
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//             {/* <View style={style.radioCircle}></View> */}
//             {
//               selectedRadio === 1 ? <View style={style.radioCircle}></View> : null
//             }
//           </View>
//           <Text style={style.radioText}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={() => setSelectedRadio(2)}
//       >
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//           {
//               selectedRadio === 2 ? <View style={style.radioCircle}></View> : null
//             }
//           </View>
//           <Text style={style.radioText}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }


// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   radioText: {
//     fontSize: 25
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioCircle: {
//     height: 28,
//     width: 28,
//     borderRadius: 10,
//     backgroundColor: 'black',
//     margin: 4
//   }
// })
// }


// Dynamic Radio Button
// {
// const App = () => {

//   const skills = [
//     {
//       id: 1,
//       name: "Java"
//     },
//     {
//       id: 2,
//       name: "C++"
//     },
//     {
//       id: 3,
//       name: "C"
//     },
//     {
//       id: 4,
//       name: "Python"
//     },
//     {
//       id: 5,
//       name: "JavaScript"
//     },
//   ]

//   const [selectedRadio, setSelectedRadio] = useState(1)
//   return (
//     <View style={style.main}>
//       {
//         skills.map((item, index) =>
//           <TouchableOpacity
//             key={index}
//             onPress={() => setSelectedRadio(item.id)}
//           >
//             <View style={style.radioWrapper}>
//               <View style={style.radio}>
//                 {/* <View style={style.radioCircle}></View> */}
//                 {
//                   selectedRadio == item.id ? <View style={style.radioCircle}></View> : null
//                 }
//               </View>
//               <Text style={style.radioText}>{item.name}</Text>
//             </View>
//           </TouchableOpacity>
//         )
//       }

//     </View>
//   )
// }


// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   radioText: {
//     fontSize: 25
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioCircle: {
//     height: 28,
//     width: 28,
//     borderRadius: 10,
//     backgroundColor: 'black',
//     margin: 4
//   }
// })
// }


// Activity Indicator (Loader)
// {
// const App = () => {
//   const [show, setShow] = useState(false);
//   const displayLoader = () => {
//     setShow(true);

//     setTimeout(()=>{
//       setShow(false);
//     }, 3000)

//     // api call in 3 sec
//   }
//   return(
//     <View style={style.main}>
//       {/* <ActivityIndicator size="large" color="red" />
//       <ActivityIndicator size="small" color="red" /> */}


//       {/* <ActivityIndicator size={200} color="green" animating={show}/> */}

//       {
//         show ? <ActivityIndicator size="large" color="red" /> : null
//       }

//       <Button 
//         title='show loader'
//         onPress={displayLoader}
//       />
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//     }
// })
// }


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------


// Modal in React Native (Dialog Box)
// {
// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   return(
//     <View style={styles.main}>
//     <Text>Modal in React Native (Dialog Box)</Text>
//       <Modal
//       transparent={true}
//       visible={showModal}
//       animationType='slide'
//         >
//         <View style={styles.centerView}>
//           <View style={styles.modalView}>
//             <Text style={{fontSize:30, marginBottom:20}}>Hello Code Step by step</Text>
//             <Button 
//               title='close modal'
//               onPress={() => setShowModal(false)}
//             />
//           </View>
//         </View>
//       </Modal>    
//       <View style={styles.buttonView}>
//       <Button 
//         title='open Madal'
//         onPress={() => setShowModal(true)}
//       />
//       </View>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 10,
//     width: 300,
//     height: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'black',
//     elevation:10 
//   }

// })
// }


// Pressable in React Native
// {
// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={{ styles.main }}>
//       <Pressable
//         onPress={() => console.warn("normal on Press")}
//         onLongPress={() => console.warn("long press")}
//         onLongPress={() => console.warn("long press")}
//         onPressIn={() => console.warn("press In")}
//         onPressOut={() => console.warn("press Out")}
//       >
//         <Text style={styles.pressableBtn}>Pressable</Text>
//       </Pressable>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   pressableBtn: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 10,
//     width: 100,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 20
//   }
// })
// }



// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------



// Status Bar 
// {
// import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'


// const App = () => {
//   const [hide, setHide] = useState(false)
//   const [barStyle, setBarStyle] = useState("default")

//   return (
//     <View style={styles.main}>
//       <StatusBar 
//         backgroundColor='red'
//         // barStyle='light-content'
//         barStyle={barStyle}
//         hidden={false}
//       />

//       <Button title='toggle Status Bar' onPress={()=>setHide(!hide)}/>
//       <Button title='Update style' onPress={()=>setBarStyle('dark-content')}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//     }
// })
// }


// Platform
// {
// import { Platform, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
//       {
//         Platform.OS == "ios"? 
//         <View styl={{beginAsyncEvent:'red', height:100, width:100}}> </View>
//         :
//         <View styl={{beginAsyncEvent:'green', height:100, width:100}}> </View>
//       }
//       <Text style={styles.text}> Hello </Text>
//       <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   text: {
//     color: Platform.OS == "android" ? "orange" : "yellow" ,
//   }
// })
// }


// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------



// Install NPM package in RN
// {
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import WebView from 'react-native-webview'

// const App = () => {
//   return (
//     <View>
//       <WebView 
//         source={{uri: 'https://www.google.com'}}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
// }



// Custom Modal ( Pop-up )
// {
// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <View style={styles.container}>
//       {
//         showModal ?
//           <View style={styles.modal}>
//             <View style={styles.body}>
//               <Text style={styles.text}>This is a custom modal</Text>
//               <Button
//                 title='close'
//                 onPress={() => setShowModal(false)}
//               />
//             </View>
//           </View>
//           : null
//       }


//       <Button
//         title="Open Dialog"
//         onPress={() => setShowModal(true)}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end'
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: 'egba(50,50,50,.5)',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   body: {
//     backgroundColor: 'white',
//     height: 300,
//     width: 300,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   }
// })
// }


// Navigation with React-Native

import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Home = () => {
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  )
}

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

export default App