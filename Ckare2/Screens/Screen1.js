import React from "react";
import {View,TextInput,Image,Text,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const Screen1  = ({navigation}) => {
    return (
      <View style={styles.container}>
               <View style={styles.div1}>
 <View><Image source={require('../assets/backicon2.png')}/></View>
        <View><Text style={styles.Heading}>Medicines</Text></View>
      </View>
          <View style={styles.search}>
               <TextInput placeholder="Search Medicine & Health Product"></TextInput>
          <Image style={styles.img1} source={require('../assets/search.png')}/>
          </View>
          <View style={styles.row1}>
             <View style={styles.box1}>
             <View style={{alignItems: 'center',}}><Image style={styles.img2} source={require('../assets/Paracetamol.png')}/></View>
          <View style={styles.txt1}>
             <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center', }}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity >
          <View style={{alignItems: 'center',}}>
             <Text style={styles.btn1}>Buy Now</Text>
          </View>
          </TouchableOpacity>
          </LinearGradient>
          </View>
   
          </View>
             </View>
             <View style={styles.box2}>
            <View style={{alignItems: 'center',}}><Image style={styles.img3} source={require('../assets/cough.png')}/></View>
          <View style={styles.txt1}>
          <Text style={styles.med1}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
         <Text  style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center', }}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
             <TouchableOpacity >
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={styles.btn1}>Buy Now</Text>
          </View>

          </TouchableOpacity>
          </LinearGradient>
          </View>
          </View>
             </View>
         
          </View> 
          <View style={styles.row1}>
             <View style={styles.box1}>
             <View style={{alignItems: 'center',}}><Image style={styles.img2} source={require('../assets/Paracetamol.png')}/></View>
          <View style={styles.txt1}>
             <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center', }}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity >
          <View style={{alignItems: 'center',}}>
             <Text style={styles.btn1}>Buy Now</Text>
          </View>
          </TouchableOpacity>
          </LinearGradient>
          </View>
   
          </View>
             </View>
             <View style={styles.box2}>
            <View style={{alignItems: 'center',}}><Image style={styles.img3} source={require('../assets/cough.png')}/></View>
          <View style={styles.txt1}>
          <Text style={styles.med1}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
         <Text  style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center', }}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
             <TouchableOpacity >
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={styles.btn1}>Buy Now</Text>
          </View>

          </TouchableOpacity>
          </LinearGradient>
          </View>
          </View>
             </View>
         
          </View> 
          <View style={styles.row1}>
             <View style={styles.box1}>
             <View style={{alignItems: 'center',}}><Image style={styles.img2} source={require('../assets/Paracetamol.png')}/></View>
          <View style={styles.txt1}>
             <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center', }}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity >
          <View style={{alignItems: 'center',}}>
             <Text style={styles.btn1}>Buy Now</Text>
          </View>
          </TouchableOpacity>
          </LinearGradient>
          </View>
   
          </View>
             </View>
             <View style={styles.box2}>
            <View style={{alignItems: 'center',}}><Image style={styles.img3} source={require('../assets/cough.png')}/></View>
          <View style={styles.txt1}>
          <Text style={styles.med1}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
         <Text  style={{fontSize: 10, marginLeft: 15,}}>⭐️⭐️⭐️⭐️⭐️</Text>
          <View style={{alignItems: 'center',}}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
             <TouchableOpacity >
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={styles.btn1} onPress={() => navigation.navigate('Screen2')}>Buy Now</Text>
          </View>

          </TouchableOpacity>
          </LinearGradient>
          </View>
          </View>
             </View>
         
          </View> 
      </View>
    )
};

const styles = StyleSheet.create({
   div1: {
      flexDirection: 'row',
      marginLeft: 15,
   },
   btn1: {
   color: 'white',
   fontSize: 11,
   marginTop: 5,
   },
   Heading: {
      marginTop: 20,
      color: 'black',
      // marginLeft: 80,
     },
   clr: {
      color:  '#009987',
   },
   container: {
      backgroundColor: 'white',
      flex: 1,
   },
   med: {
      color: 'black',
      fontSize: 11,
      marginHorizontal: 15,
      marginTop: 9,
   },
   med1: {
      color: 'black',
      fontSize: 11,
      marginHorizontal: 15,
      marginTop: 5,
   },
   des: {
      color: 'black',
      fontSize: 9,
      marginHorizontal: 15,
   },
    btn: {
        borderRadius: 20,
          width: Dimensions.get('window').width*0.38,
          height: Dimensions.get('window').width*0.07,
         marginTop: 10,
    },
    box1: {
        borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 15,
  paddingTop: 15,
    width: Dimensions.get('window').width*0.42,
  height: Dimensions.get('window').height*0.25,
    },
    box2: {
      borderWidth: 1,
  borderColor: '#E1E1E1',
  paddingTop: 5,
  borderRadius: 15,
  width: Dimensions.get('window').width*0.42,
  height: Dimensions.get('window').height*0.25,
  },
    row1: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('window').width*0.9,
        marginLeft: 15,
    },

    search: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EFF3FA',
        borderRadius: 15,
        backgroundColor: '#EFF3FA',
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 15,
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: Dimensions.get('window').width*0.9
    },
    img1: {
        height: 22,
    },
});

export default Screen1;