import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Letsign = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.firstdiv}>
                <Image style={styles.fimg} source={require('../Assests/goimg.png')} />

                <View style={styles.fdiv}>
                    <Text style={styles.heading}>Please Verification!</Text>
                    <Text style={styles.inserttext}>Insert your OTP code to continue</Text>
                </View>
                {/* <TouchableOpacity>
                    <Text style={styles.continuebtn} onPress={() => navigation.navigate('Homesign')}>Get Started</Text>
                </TouchableOpacity> */}

                <View style={styles.mainview}>
            <View style={styles.detailsview}>
                <TouchableOpacity onPress={() => navigation.navigate('Homesign')}>

                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.linearGradient} >
                        <Text style={styles.buttonText}>
                          Get Started
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
        justifyContent: 'space-between',

    },
    fdiv: {

        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 10,
    },
    fimg: {
        marginTop: 40,
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


