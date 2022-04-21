import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style = {styles.o1} >First Name:</Text>
      <TextInput style = {styles.i1} placeholder="Enter Your First Name "/>
       <Text style = {styles.o2} >Last Name:</Text>
      <TextInput style = {styles.i2} placeholder="Enter Your Last Name "/>
      <Text style = {styles.o3} >Email:</Text>
      <TextInput style = {styles.i3} placeholder="Enter Your Email id "/>
      <Text style = {styles.o3} >Mobile No:</Text>
      <TextInput style = {styles.i3} placeholder="Enter Your Mobile No "/>
      <Text style = {styles.o3} >Describe About Yourself:</Text>
      <TextInput style = {styles.i3} placeholder="Enter Your Bio "/>
    </View>

  )
}

const styles = StyleSheet.create({
 o1:{
   marginTop:50,
   marginBottom:2,
   marginLeft:20,

        
 },
 i1:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 160,
            marginLeft:20,        
 },
 o2:{
       position:'absolute',
       top:52,
       left:210,
 },
 i2:{

            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 160,
            position:'absolute',
            top:70,
            left:210,
 },
 o3:{
  marginTop:20,
  marginBottom:2,
  marginLeft:20,  
},

i3:{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  width: 350,
  marginLeft:20,        
},



})

export default App;




