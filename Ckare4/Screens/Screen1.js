import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


const Screen1 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
        <Image onPress={() => navigation.navigate('Screen')} source={require('../assets/backicon2.png')}/>
        </View>

        <View style={styles.location}>
        <View style={styles.pinicon}><Image source={require('../assets/pinicon.png')}/></View>
           <View style={styles.address}><Text style={{fontSize: 16, color: '#37a987',
}}>Patia, Bhubaneswar</Text></View>
        </View>
        <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <View><Text style={styles.txt9}>Complete Blood Count (CBC)</Text></View>
          <View><Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text></View>  
              </View> 
              <View style={styles.Row2}>
              <View><Image style={styles.img1} source={require('../assets/deleteicon.png')}/></View>
              </View>
              </View> 
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <View><Text style={styles.txt9}>Thyroid Stmulating Hormone (TSH)</Text></View>
          <View><Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text></View>  
              </View> 
              <View style={styles.Row2}>
              <View><Image style={styles.img2} source={require('../assets/deleteicon.png')}/></View>
              </View>
              </View> 
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <View><Text style={styles.txt9}>LIver Function Test</Text></View>
          <View><Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text></View>  
              </View> 
              <View style={styles.Row2}>
              <View><Image style={styles.img3} source={require('../assets/deleteicon.png')}/></View>
              </View>
              </View>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <View><Text style={styles.txt9}>Thyphoid</Text></View>
          <View><Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text></View>  
              </View> 
              <View style={styles.Row2}>
              <View><Image style={styles.img4} source={require('../assets/deleteicon.png')}/></View>
              </View>
              </View> 
              </TouchableOpacity> 
          <View style={{alignItems: 'center',}}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
             <TouchableOpacity >
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={styles.btn1} onPress={() => navigation.navigate('Screen2')}>Book Now</Text>
          </View>

          </TouchableOpacity>
          </LinearGradient>
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    Row2: {
     justifyContent: 'center',
      // alignItems: 'center',
    },
    clr: {
      color: '#009987',
    },
    txt9: {
      color: '#222222',
      marginLeft: 15,
      marginTop: 7,
      fontSize: 11,
     },
     txt10: {
      color: '#222222',
      marginLeft: 15,
      marginTop: 5,
      fontSize: 9,
     },
    thyroid: {
      // justifyContent: 'space-between',
      flexDirection: 'row',
      // alignItems: 'center',
 },
    div2: {
      // justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#15dcd3',
        width: Dimensions.get('window').width*0.92,
        marginHorizontal: 15,
        borderRadius: 10,
        height: 50,
        marginTop: 15,
        marginVertical:2,
    borderColor: '#E1E1E1',
    },
    address: {
     marginTop: 8,
    },
    container: {
      backgroundColor: '#FFFEFF',
      flex: 1,
    },
    icon: {
      marginLeft: 20,
      marginTop: 25,
    },
    location: {
       flexDirection: 'row',
      marginLeft: 20,
    },
    btn1: {
      color: 'white',
      fontSize: 16,
      marginTop: 5,
      },
      btn: {
        borderRadius: 20,
          width: Dimensions.get('window').width*0.9,
          height: Dimensions.get('window').width*0.1,
         marginTop: 230,
    },
    img1: {
       marginLeft: 120,
    },
    img2: {
       marginLeft: 90,
    },
    img3: {
      marginLeft: 170,
   },
   img4: {
    marginLeft: 169,
 },
  })

  export default Screen1;
  