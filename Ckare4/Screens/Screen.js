import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/backicon2.png')}/>
      </View>
      <Text style={styles.Heading}>Please enter your MRN Number</Text>
      <View style={styles.INput}>
        <View style={styles.Input}>
          <TextInput
            style={styles.input}
            placeholder={'Enter MRN Number'}></TextInput>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Or}>OR</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.div}>
          <Text style={styles.txt}>
            Please upload images of your prescription
          </Text>
          <View style={{alignItems: 'center'}}>
          <View style={styles.div1}>
           <View><Image source={require('../assets/fileicon.png')}/></View> 
           <View><Text style={styles.txt1}>Upload Prescription</Text></View> 
          </View>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.btn1} onPress={() => navigation.navigate('Screen1')}>Get Your Medicine</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
  },
  txt1: {
    color: '#37a987',
  },
  div1: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.09,
    borderWidth: 1,
    borderColor: '#37a987',
    paddingTop: 5,
    paddingHorizontal: 60,
    color: '#37a987',
  },
  backicon: {
    color: '#37a987',
  },
  icon: {
    marginLeft: 20,
    marginTop: 25,
  },
  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.1,
    marginTop: 250,
  },
  Heading: {
    marginLeft: 20,
    marginTop: 25,
    color: '#000000',
    fontSize: 13,
  },
  Or: {
    color: 'black',
    paddingVertical: 15,
  },
  input: {
    fontSize: 12,
    color: '#000000',
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 8,
    height: Dimensions.get('window').height * 0.055,
    borderColor: '#E1E1E1',
  },
  INput: {
    alignItems: 'center',
  },
  div: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.35,
    alignItems: 'center',
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  txt: {
    marginVertical: 22,
    color: 'black',
    fontSize: 13,
  },
});

export default Screen;
