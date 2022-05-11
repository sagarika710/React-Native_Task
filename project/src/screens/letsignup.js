import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button1 from '../components/button';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Letsign = ({ navigation }) => {
    var tpi= [
        {
            // url: require('../assets/img/Cricket_icon.png'),
            // centername: 'Consultant',
            // name: 'Video Conference',
            // time: '06.30',
            // date: '22.02.2022',
            // bookingtype: 'Upcoming',
            // price: '₹240',
            button:'Get Started',
        },
       
    ]
    return (
        <View style={styles.container}>

            <View style={styles.firstdiv}>
                <Image style={styles.fimg} source={require('../Assests/goimg.png')} />

                <View style={styles.fdiv}>
                    <Text style={styles.heading}>Let's get Started</Text>
                    <Text style={styles.inserttext}>Let’s consult wit doctor now</Text>
                </View>
                {/* <TouchableOpacity>
                    <Text style={styles.continuebtn} onPress={() => navigation.navigate('Home')}>Get Started</Text>
                </TouchableOpacity> */}
{/* 
                {
     tpi.map((dinesh1)=> {
         return(
             <Button1 data={dinesh1}/>
         )
     }) 
  }  */}
   <View style={styles.mainview}>
            <View style={styles.detailsview}>
                <TouchableOpacity onPress={() => navigation.navigate('Homesign')}>

                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.linearGradient} >
                        <Text style={styles.buttonText} >
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
        backgroundColor: 'white',
    },
    firstdiv: {
        justifyContent: 'space-evenly',
        // backgroundColor:'black',
        // borderWidth:10,
        height: Dimensions.get('window').height * 1,


    },
    fdiv: {

        alignItems: 'center',
        marginTop: 15,
        paddingVertical: 10,
        // marginVertical:40,

    },
    fimg: {
        marginTop: 40,
    },
    heading: {
        fontWeight: '500',
        fontSize: 25,
        color: 'black',

    },
    inserttext: {
        fontSize: 13,
        paddingTop: 5,
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

export default Letsign;


