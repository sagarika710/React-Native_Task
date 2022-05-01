import React from "react";
import {View,TextInput,Image,Text,TouchableOpacity,StyleSheet} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';


const Screen1  = ({navigation}) => {
    return (
      <View style={styles.container}>
               <View style={styles.div1}>
        <Text style={styles.Heading}>Medicines</Text>
      </View>
          <View style={styles.search}>
               <TextInput placeholder="Search Medicine & Health Product"></TextInput>
          <Image style={styles.img1} source={require('../assets/search.png')}/>
          </View>
          <View style={styles.row1}>
             <View style={styles.box1}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>

          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Buy Now</Text>
          </TouchableOpacity>
   
          </View>
             </View>
             <View style={styles.box2}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Buy Now</Text>
          </TouchableOpacity>
          </View>
             </View>
          </View> 
          <View style={styles.row1}>
             <View style={styles.box1}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Buy Now</Text>
          </TouchableOpacity>
          </View>
             </View>
             <View style={styles.box2}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Buy Now</Text>
          </TouchableOpacity>
          </View>
             </View>
          </View> 
          <View style={styles.row1}>
             <View style={styles.box1}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100 <Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Buy Now</Text>
          </TouchableOpacity>
          </View>
             </View>
             <View style={styles.box2}>
          <Image style={styles.img2} source={require('../assets/Paracetamol.png')}/>
          <View style={styles.txt1}>
          <Text style={styles.med}>Paracetamol 500mg</Text>
          <Text style={styles.des}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
          <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen2')}>Buy Now</Text>
          </TouchableOpacity>
          </View>
             </View>
          </View> 
      </View>
    )
};

const styles = StyleSheet.create({
   Heading: {
      marginTop: 20,
      color: 'black',
      marginLeft: 80,
     },
   clr: {
      color:  '#009987',
   },
   container: {
      backgroundColor: 'white',
      height: 1100,
   },
   med: {
      color: 'black',
      fontSize: 13,
   },
   des: {
      color: 'black',
      fontSize: 10,
   },
   img2: {
        marginLeft: 35,
        marginTop: 18,
   },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderRadius: 20,
        backgroundColor: '#009987',
        marginRight: 15,
        marginTop: 10,
    },
    btn1: {
     fontSize: 11,
     marginLeft: 29,
     color: 'white',
    },
    box1: {
        borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 15,
    width: 170,
    height: 186,
    marginLeft: 27,
    },
    box2: {
      borderWidth: 1,
  borderColor: '#E1E1E1',
  borderRadius: 15,
  width: 170,
  height: 186,
  marginLeft: 12,
  },
    row1: {
        marginTop: 20,
        flexDirection: 'row',
    },
    row2: {
      marginTop: 20,
      flexDirection: 'row',
  },
    txt1: {
        marginTop: 7,
        marginLeft: 15,
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
        marginLeft: 85,
    },
});

export default Screen1;