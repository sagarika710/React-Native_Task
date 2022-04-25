import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
<ScrollView  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
            <View style={styles.docdiv}>
                <View style={styles.image1div}>
                    <Image style={styles.img1} source={require('../Assests/doctorimg.png')} />
                </View>


                <Text style={styles.ftext}>One  app for all your</Text>
                <Text style={styles.stext}>Health need</Text>
                <Text style={styles.ttext}>Get your best experience now! </Text>

            </View>

            <View style={styles.sdiv}>

                <Text style={styles.heading}>Welcome to Ckare!</Text>
                <Text style={styles.inserttext}>Insert your phone number to start</Text>

                <Image style={styles.img2} source={require('../Assests/mapimg.png')} />

                <TextInput style={styles.numberinput}>+91</TextInput>


                <View style={styles.nextpage}>
                    <TouchableOpacity>
                        <Text style={styles.startedbtn} onPress={() => navigation.navigate('Login')}>Next Page</Text>
                    </TouchableOpacity>
                </View>

            </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00E0C5',
    },
    img1: {
        width: 180,
        height: 180,

    },
    image1div: {
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 600,
        paddingTop: 25,
        height: 230,
        width: 230,
        backgroundColor: '#009987',
        position: 'relative',
        marginTop: 80,



    },
    docdiv: {
        // borderWidth:1,
        backgroundColor: '#00E0C5',
        alignItems: 'center',

    },
    startedbtn: {
        marginTop: 50,
        color: 'white',
        width: 80,
        padding: 6,
        borderRadius: 20,
      
        backgroundColor: '#009987',


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

    sdiv: {
        // borderWidth:1,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingTop: 30,
        paddingLeft: 40,
        backgroundColor: 'white',
        paddingBottom: 80,
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
        paddingLeft: 130,
    },
}
)
export default Home;