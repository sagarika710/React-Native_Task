import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

// const Login = (props) => 
const Regsign = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>

      <Text style={styles.startedbtn} onPress={() => navigation.navigate('Signup')}> Back</Text>
      <View style={styles.fdiv}>
        <Text style={styles.heading}>Please Register</Text>
        <Text style={styles.inserttext}>Please fill all the details.</Text>
      </View>



      <View style={styles.reginputdiv}>
        <TextInput style={styles.inputtext} placeholder='Full name'></TextInput>
        <TextInput style={styles.inputtext} placeholder='Email Id'></TextInput>
        <TextInput style={styles.inputtext} placeholder='Date Of Birth'></TextInput>
        <TextInput style={styles.inputtext} placeholder='Aadhar Number'></TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.continuebtn} onPress={() => navigation.navigate('Med')}>Continue</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  startedbtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
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
  reginputdiv: {
    justifyContent: 'space-evenly',
    marginBottom: 50,
    marginTop: 20,
    height: 400,
  },
  fdiv: {
    paddingHorizontal: 20,
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
  inputtext: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 20,

  },


})
export default Regsign;