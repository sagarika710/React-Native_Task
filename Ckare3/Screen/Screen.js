import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';


const Screen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.icon}><Icon2 name='chevron-with-circle-left' style={styles.backicon1} size={18}/></Text>
          <Text style={styles.Heading}>
              Please enter your MRN Number
          </Text>
          <TextInput style={styles.input} placeholder={'Enter MRN Number'}></TextInput>
          <Text style={styles.Or}>OR</Text>
          <View style={styles.div}>
          <Text style={styles.txt}>Please upload images of your prescription</Text>
          <View style={styles.div1}>
          <Text style={styles.txt1}><Icon1 name='addfile' style={styles.backicon} size={18}/>Upload Prescription</Text>
          </View>
          </View>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen1')}>Get your Medicines</Text>
          </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    backicon: {
    paddingRight: 40,
    color: '#37a987',
    },
    icon: {
         marginLeft: 20,
         marginTop: 35,
        Color: '#E1E1E1',
    },
    btn: {
        marginLeft: 10,
        marginTop: 350,
        borderWidth: 1,
        paddingHorizontal: 115,
        paddingVertical: 10,
        marginLeft: 20,
        width: 370,
      borderRadius: 20,
      backgroundColor: '#37a987',
      borderColor: '#37a987',
    },
    btn1: {
        color: 'white',
       },
    Heading: {
        marginLeft: 20,
        marginTop: 25,
        color: 'black',
      fontSize: 13,
    },
    Or: {
       marginVertical: 30,
       marginLeft: 200,
       color: 'black',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 375,
        marginLeft: 20,
        marginTop: 20,
        paddingLeft: 8,
        height: 40,
        fontSize: 12,
        borderColor: '#E1E1E1',
    },
  div: {
      borderWidth: 1,
      width: 375,
      marginLeft: 20,
      height: 130,
      borderColor: '#E1E1E1',
      borderRadius: 10,
  },
  txt: {
      marginVertical: 22,
      color: 'black',
      fontSize: 13,
      marginLeft: 20,
  },
  txt1:{
     borderWidth: 1,
     borderColor: '#37a987',
     width: 340,
     marginLeft: 20,
     paddingVertical: 6,
     borderRadius: 10,
     paddingHorizontal: 90,
     color: '#37a987',
  }
  })

  export default Screen;
  