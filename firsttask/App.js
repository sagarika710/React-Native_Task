import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';


const App = () => {
  return (
   <ScrollView>
   <View style = {styles.d0}>
   <View style = {styles.d1}>
      <Text style = {styles.o1} >Data Add-On Packs</Text>
    </View>
   
    <View style = {styles.d2}>
      <Text style = {styles.o2} >PLAN</Text>
      <Text style = {styles.o3} >VALIDITY</Text>
      <Text style = {styles.o4} >DATA</Text>
      <Text style = {styles.o5} >₹181</Text>
      <Text style = {styles.o6} >30 days</Text>
      <Text style = {styles.o7} >30 GB</Text>
      <Text style = {styles.o8} >Buy</Text>
      <Text style = {styles.o9} >View details</Text>
    </View>
    <View style = {styles.d2}>
      <Text style = {styles.o2} >PLAN</Text>
      <Text style = {styles.o3} >VALIDITY</Text>
      <Text style = {styles.o4} >DATA</Text>
      <Text style = {styles.o5} >₹241</Text>
      <Text style = {styles.o6} >30 days</Text>
      <Text style = {styles.o7} >40 GB</Text>
      <Text style = {styles.o8} >Buy</Text>
      <Text style = {styles.o9} >View details</Text>
    </View>
    <View style = {styles.d2}>
      <Text style = {styles.o2} >PLAN</Text>
      <Text style = {styles.o3} >VALIDITY</Text>
      <Text style = {styles.o4} >DATA</Text>
      <Text style = {styles.o5} >₹301</Text>
      <Text style = {styles.o6} >30 days</Text>
      <Text style = {styles.o7} >50 GB</Text>
      <Text style = {styles.o8} >Buy</Text>
      <Text style = {styles.o9} >View details</Text>
    </View>
    <View style = {styles.d2}>
      <Text style = {styles.o2} >PLAN</Text>
      <Text style = {styles.o3} >VALIDITY</Text>
      <Text style = {styles.o4} >DATA</Text>
      <Text style = {styles.o5} >₹555</Text>
      <Text style = {styles.o6} >55 days</Text>
      <Text style = {styles.o7} >55 GB</Text>
      <Text style = {styles.o8} >Buy</Text>
      <Text style = {styles.o9} >View details</Text>
      <Text style = {styles.o10} >SUBSCRIPTIONS</Text>
      <Text style = {styles.o11} >DATA ADD-ON PACK</Text>

    </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  d0:{   
flex: 1,
backgroundColor: '#eef0f1',
},

d1:{
  borderWidth: 0,
  marginTop:12,
  marginLeft:10,
  marginRight:10,
  borderTopRightRadius: 13,
  borderTopLeftRadius: 13,
  backgroundColor:'#ffff', 
},
  o1:{
   marginTop:15,
   marginBottom:15,
   marginLeft:20,
   fontWeight:'bold',
   color:'black',
   fontSize: 18,
 },
 d2:{
  borderWidth: 0,
  marginTop:3,
  marginLeft:10,
  marginRight:10,
  padding:30,
  paddingBottom:86,
  backgroundColor:'#ffff',
 },
 o2:{
  position:'relative',
  right:10,
  bottom:5,
 },
 o3:{
  position:'absolute',
  left:105,
  top:25,
},
o4:{
  position:'absolute',
  left:188,
  top:25,
},
o5:{
  position:'relative',
  color:'red',
  fontSize:25,
  fontWeight:'900',
  right:11,  
},
o6:{
  position:'absolute',
  left:105,
  top:55,
  fontWeight:'bold',
  color:'black',
},
o7:{
  position:'absolute',
  left:188,
  top:57,
  fontWeight:'bold',
  color:'black',
},
o8:{
  position:'absolute',
  left:250,
  top:100,
  fontWeight:'bold',
  color:'white',
  backgroundColor:'#213CDD',
  borderWidth: 0,
  borderRadius:10,
  paddingLeft:40,
  paddingRight:40,
  paddingBottom:10,
  paddingTop:10,
},
o9:{
  position:'absolute',
  top:110,
  left:22,
  fontWeight:'bold',
  color:'black',
  fontSize:14,
  color:'#254FE2',
},
o10:{
  position:'absolute',
  left:250,
  top:26,
},
o11:{
  position:'absolute',
  fontWeight:'bold',
  color:'#614A27',
  backgroundColor:'#FBCA03',
  borderWidth: 0,
 borderRadius:10,
 paddingLeft:8,
 paddingRight:8,
 paddingBottom:2,
 paddingTop:2,
 fontSize:9,
},
})
export default App;



