import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';

// const Login = (props) => 
const Wel = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.startedbtn} ><Icon1 name='left' style={styles.backicon} onPress={() => navigation.navigate('Order')} size={20} /></View>


      <View style={styles.fdiv}>
        <Text style={styles.heading}>Welcome to Ckare!</Text>
        <Text style={styles.inserttext}>Insert your phone number to start</Text>
        <Image style={styles.img2} source={require('../Assests/mapimg.png')} />

        <TextInput style={styles.numberinput}>+91</TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.continuebtn} onPress={() => navigation.navigate('Veri')}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',
  },
  
  fdiv: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },




  heading: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
  numberinput: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 280,
    marginLeft: 50,
    marginTop: -34,
    marginBottom: 30,
  },
  img2: {
    position: 'relative',
    left: -15,
    top: 25,
  },
  continuebtn: {

    paddingLeft: 130,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    marginTop: 40,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: '#009987',

  },
  backicon:{
    backgroundColor:'#EFF3FA',
    borderRadius:30,
   marginRight:16,
    padding:10,
    width:43,
       },
startedbtn: {
    
        borderRadius: 20,
       paddingTop:40,
       paddingBottom:20,
        width: 80,
        color: 'black',
        marginLeft: 20,
        marginTop: 10,
      },
})
export default Wel;