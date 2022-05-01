import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';



const Wron = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.startedbtn} onPress={() => navigation.navigate('Signup')}> Back</Text>

      
      <View style={styles.fdiv}>
        <Text style={styles.heading}>Please Verification!</Text>
        <Text style={styles.inserttext}>Insert your OTP code to continue</Text>
        <View style={styles.otpdiv}>
          <TextInput style={styles.otpinput}></TextInput>
          <TextInput style={styles.otpinput}></TextInput>
          <TextInput style={styles.otpinput}></TextInput>
          <TextInput style={styles.otpinput}></TextInput>

        </View>

        <View style={styles.notreceivediv}>
          <Text style={styles.wrongcode}>Wrong OTP code</Text>
          <Text style={styles.resend}>Resend code</Text>

        </View>




      </View>
      <TouchableOpacity>
        <Text style={styles.continuebtn} onPress={() => navigation.navigate('Letsign')}>Continue</Text>
      </TouchableOpacity>
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
  otpdiv: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  otpinput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  notreceivediv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
  },
  resend: {
    color: 'blue',
  },
  wrongcode: {
    color: 'red',
  },

})
export default Wron;