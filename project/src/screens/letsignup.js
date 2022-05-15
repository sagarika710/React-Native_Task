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
                <View>
                <Image style={styles.fimg} source={require('../Assests/goimg.png')} />
                </View>
                <View style={styles.fdiv}>
                    <Text style={styles.heading}>Let's get Started</Text>
                    <Text style={styles.inserttext}>Let’s consult wit doctor now</Text>
                </View>
                {/* <TouchableOpacity>
                    <Text style={styles.continuebtn} onPress={() => navigation.navigate('Home')}>Get Started</Text>
                </TouchableOpacity> */}
<View>
                {
     tpi.map((dinesh1)=> {
         return(
             <Button1 data={dinesh1}/>
         )
     }) 
  } 
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
        marginTop: 30,
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.5,

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
})

export default Letsign;


