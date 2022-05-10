import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
<View style={styles.holediv}>

<LinearGradient colors={['#009987', '#00E0C5', '#009987', ]} style={styles.linearGradient} >
  


            <View style={styles.docdiv} >
                <View style={styles.image1div}>
                    <Image style={styles.img1} source={require('../Assests/doctorimg.png')} />
                </View>


                <Text style={styles.ftext}>One  app for all your</Text>
                <Text style={styles.stext}>Health need</Text>
                <Text style={styles.ttext}>Get your best experience now! </Text>

            </View>
           

            <View style={styles.Welcomediv}>
                <View style={styles.sdiv}>

                <Text style={styles.heading} onPress={() => navigation.navigate('Wel')}>Welcome to Ckare!</Text>
                <Text style={styles.inserttext}>Insert your phone number to start</Text>

                <Image style={styles.img2} source={require('../Assests/mapimg.png')} />

                <TextInput maxLength={13}  keyboardType='numeric'  style={styles.numberinput}>+91</TextInput>

                <View style={styles.sdiv2}>
                <View style={{marginVertical:10,}}><Text>OR</Text></View>
                    {/* <TouchableOpacity>
                        <Text style={styles.startedbtn} onPress={() => navigation.navigate('Wel')}>Next Page</Text>
                    </TouchableOpacity> */}
                    <View style={styles.icondiv}>
                    <View><Icon1 name='google' style={styles.googleicon} size={35} /></View>
                    <View><Icon2 name='facebook-with-circle' style={styles.backicon} size={40} /></View>
                    <View><Icon3 name='apple1' style={styles.appleicon} size={27} /></View>
                    </View>
                    </View>
            </View>

         




            </View>
            
            </LinearGradient>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#00E0C5',
    },
    img1: {
        width: 180,
        height: 180,

    },
    image1div: {
        // borderWidth: 1,
        alignItems: 'center',
        borderRadius: 600,
        paddingTop: 25,
        height: 230,
        width: 230,
        backgroundColor: '#009987',
        marginTop:60,



    },
    docdiv: {
        // borderWidth:1,
        // backgroundColor: '#00E0C5',
        alignItems: 'center',
        justifyContent:'center',

    },
    ftext: {
        paddingTop: 40,
        color: 'white',
        fontSize: 30,

    },
    stext: {
        color: 'white',
        fontSize: 27,
        paddingTop: 5,

    },
    ttext: {
        color: 'white',
        paddingTop: 10,
        paddingBottom: 40,
    },

    Welcomediv: {
        // borderWidth:1,
        backgroundColor: 'white',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingTop: 35,
        alignItems:'center',
        marginTop:-20,
        paddingBottom:90,
       
    },
    sdiv:{
      
        
        width:Dimensions.get('window').width*0.9,
        justifyContent:'space-evenly',
        // backgroundColor:'red',
        paddingBottom: 30,
        paddingHorizontal:20,
        height: Dimensions.get('window').height * 0.33,

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
    img2: {
        position: 'relative',
        left: -15,
        top: 25,
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
    nextpage: {
       
        borderWidth:1,
        width:Dimensions.get('window').width*1,
    },
    holediv:{
                justifyContent:'space-between',
    },
    linearGradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        // borderRadius: 30,
        width:Dimensions.get('window').width*1,
      },
      googleicon:{
            color:'green'
      },
      appleicon:{
          color:'white',
          borderRadius:50,
          borderWidth:1,
          padding:5,
          backgroundColor:'black',
      },
      icondiv:{

      
      justifyContent:'space-evenly',flexDirection:'row',width:Dimensions.get('window').width*0.7,
      

    },
    sdiv2:{
            alignItems:'center',
            
    },
}
)
export default Home;