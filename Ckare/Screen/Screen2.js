import React from 'react';
import {View, Image, Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';

const Screen3  = ({navigation}) =>{
    return(
       <View style={styles.container}>
            <Text style={styles.hed1}>Medicine</Text>
            <View style={styles.search}>
               <TextInput placeholder="Search Medicine & Health Product"></TextInput>
          <Image style={styles.img1} source={require('../assets/search.png')}/>
          </View>
          <Image style={styles.img2} source={require('../assets/Paracetamol1.png')}/>
          <Text style={styles.txt1}>Paracetamol 500mg</Text>
                <Text style={styles.txt2}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
        <View style={styles.line}></View>
        <Text style={styles.text1}>Deliver To Sagarika Mohanty, Nandan Vihar,</Text>
            <Text style={styles.text2}>Patia, Bhubaneswar, 751024</Text>
            <View style={styles.div2}>
            <Text style={styles.text3}>Deliver By 26 Feb 2022 | 10.00 PM</Text>
            <Text style={styles.text4}>Change Address</Text>
       </View>
        <View style={styles.line1}></View>

        <Text style={styles.txt1}>Uses of  Paracetamol</Text>
        <Text style={styles.txt4}>Fever</Text>
        <Text style={styles.txt3}>Cold</Text>
        <Text style={styles.txt3}>Headach</Text>
        <Text style={styles.txt3}>Body Pain</Text>

        <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen3')}>Add to Cart</Text>
          </TouchableOpacity>
       </View>
    )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 800,
  },
    btn1: {
        color: 'white',
       },
    btn: {
        marginLeft: 10,
        marginTop: 25,
        borderWidth: 1,
        paddingHorizontal: 140,
        paddingVertical: 10,
        marginLeft: 20,
        width: 370,
      borderRadius: 20,
      backgroundColor: '#37a987',
      borderColor: '#37a987',
    },
    hed1: {
       marginLeft: 80,
       marginTop: 30,
       color: 'black',
    },
    text4: {
        marginLeft: 25,
        marginTop: 20,
        fontSize: 12,
        color: 'black',
        borderWidth: 2,
    borderRadius: 5,
    borderColor: '#009987',
    width: 130,
    paddingVertical: 6,
    paddingHorizontal: 13,
    color: '#009987',
       },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#E1E1E1',
        width: 360,
        marginLeft: 20,
        marginTop: 15,
    },
    line1: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#E1E1E1',
        width: 360,
        marginLeft: 20,
        marginTop: 35,
    },
    clr: {
        color: '#009987',
    },
    txt1: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 14,
        color: 'black',
    },
    txt4: {
        marginLeft: 25,
        marginTop: 20,
        fontSize: 12,
    },
    txt3: {
        marginLeft: 25,
        marginTop: 5,
        fontSize: 12,

    },
    text1: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 12,
        color: 'black',
    },
    text2: {
        marginLeft: 20,
        marginTop: 0,
        fontSize: 12,
        color: 'black',
    },
    text3: {
        marginLeft: 20,
        marginTop: 25,
        fontSize: 12,
        color: 'black',
    },
    txt2: {
        marginLeft: 20,
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
    div2: {
     flexDirection: 'row',
    },
    container: {
      backgroundColor: 'white',
      height: 800,
    },
    search: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EFF3FA',
        borderRadius: 15,
        width: 365,
        marginLeft: 22,
        marginTop: 20,
        backgroundColor: '#EFF3FA',
        paddingLeft: 10,
    },
    img1: {
        height: 22,
        marginTop: 14,
        marginLeft: 75,
    },
    img2: {
        marginTop: 30,
        marginLeft: 50,
    }
})

export default Screen3;
