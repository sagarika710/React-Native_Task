import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


const Let = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.firstdiv}>
                <Image style={styles.fimg} source={require('../Assests/goimg.png')} />

                <View style={styles.fdiv}>
                    <Text style={styles.heading}>Please Verification!</Text>
                    <Text style={styles.inserttext}>Insert your OTP code to continue</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.continuebtn} onPress={() => navigation.navigate('Home')}>Get Started</Text>
                </TouchableOpacity>

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
        marginTop: 60,
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
})

export default Let;


