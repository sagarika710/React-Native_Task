import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


// const Login = (props) => 
const Regsign = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>

<View style={styles.startedbtn} ><Icon1 name='left' style={styles.backicon} onPress={() => navigation.navigate('Wronsign')} size={20} /></View>
      <View style={styles.fdiv}>
        <Text style={styles.heading}>Please Register</Text>
        <Text style={styles.inserttext}>Please fill all the details.</Text>
      </View>



      <View style={styles.reginputdiv}>
      <View ><TextInput style={styles.inputtext} placeholder='Full name'></TextInput></View>
        <TextInput style={styles.inputtext} placeholder='Email Id'></TextInput>
        <TextInput style={styles.inputtext} placeholder='Date Of Birth'></TextInput>
        <TextInput style={styles.inputtext} placeholder='Aadhar Number'></TextInput>
      </View>
      {/* <TouchableOpacity>
        <Text style={styles.continuebtn} onPress={() => navigation.navigate('Med')}>Continue</Text>
      </TouchableOpacity> */}


      <View style={styles.mainview}>
            <View style={styles.detailsview}>
                <TouchableOpacity onPress={() => navigation.navigate('Med')}>

                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.linearGradient} >
                        <Text style={styles.buttonText}>
                            Continue
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>

      
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',
    
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
    height: 350,
  },
  fdiv: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
  inputtext: {
    borderColor: '#DEE1E6',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 30,

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
      mainview: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        width: Dimensions.get('window').width * 0.80,
    },
    buttonText: {
        fontSize: 18,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        // margin: 10,
        color: 'white',
        marginVertical: 10,
        backgroundColor: 'transparent',

        paddingVertical: 2,
    },



})
export default Regsign;