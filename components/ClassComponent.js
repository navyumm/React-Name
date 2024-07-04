import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class Student extends Component{
  render(){
    // console.warn(this.props);
    return(
      <View>
        <Text style={{fontSize:30}}>Student name : {this.props.name}</Text>
      </View>
      )
      }
}

export default Student