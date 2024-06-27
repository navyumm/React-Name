import React from 'react';
import { Button, Text, View } from 'react-native';
import CompanyData from './components/CompanyData';


let age = 18;
var email = "abc@test.com"

function fruit() {
  return "apple";
}

const App = () => {

  return (
    <View>
      <UserData />
      <Text style={{ fontSize: 30, fontWeight:'800' }}>Components</Text>
      <CompanyData />
    </View>
  );
}

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Name : Navi</Text>
      <Text style={{ fontSize: 30 }}>Age : 24</Text>
      <Text style={{ fontSize: 30 }}>Email : test@google.com</Text>
    </View>
  )
}



export default App