import React from 'react';
import {View,TextInput, Text,TouchableOpacity, StyleSheet} from 'react-native';

const  Screen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Please enter your MRN Number</Text>
            <TextInput style={styles.input} placeholder="Enter MRN Number"></TextInput>
            <Text style={styles.or}>OR</Text> 
            <View style={styles.div}>
            <View style={styles.div1}>
            <Text style={styles.txt1}>Please upload images of your prescription</Text>
            </View>
            <View style={styles.div2}>
            <Text style={styles.txt2}>Upload Prescription</Text> 
            </View>
            </View>
            <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen1')}>Get your Medicine</Text>
          </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    btn1: {
        color: 'white',
    },
    btn: {
        marginLeft: 10,
        marginTop: 350,
        borderWidth: 1,
        paddingHorizontal: 120,
        paddingVertical: 8,
        marginLeft: 20,
        width: 370,
      borderRadius: 20,
      backgroundColor: '#37a987',
      borderColor: '#37a987',
    },
    txt1: {
     marginLeft: 10,
     marginTop: 25,
     color: 'black',
    },
    txt2: {
     marginLeft: 10,
     marginTop: 25,
     borderWidth: 2,
      width: 340,
      paddingHorizontal: 95,
      paddingVertical: 5,
      borderRadius: 10,
    color: '#009987',
    borderColor: '#37a987',
    },
    div: {
        borderWidth: 1,
        height: 125,
       width: 365,
       marginLeft: 20,
       borderRadius: 10,
       borderColor:  '#E1E1E1',
       marginTop: 25,
    },
    or: {
        marginLeft: 195,
        marginTop: 30,
    },
    container: {
        backgroundColor: 'white',
        height: 1000,
    },
    txt: {
        marginLeft: 20,
       marginTop: 80,
       color: 'black',
    },
    input: {
       borderWidth: 1,
       borderColor:  '#E1E1E1',
       marginTop: 16,
       borderRadius: 10,
       width: 365,
       marginLeft: 20,
       paddingLeft: 12,
       height: 40,
       fontSize: 12,
    },
});

export default Screen;