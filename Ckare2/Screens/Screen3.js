import React from "react";
import {View,TextInput,Image,Text,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Screen2  = ({navigation}) => {
    return(
        <View style={styles.container}>
                <Text style={styles.heading}>Cart</Text>
            <View style={styles.div1}>
                <View style={styles.col1}>
          <Image style={styles.img} source={require('../assets/Paracetamol2.png')}/>
                </View>
                <View style={styles.col2}>
                <Text style={styles.txt1}>Paracetamol 500mg</Text>
                <Text style={styles.txt2}>₹ 80.00 100<Text style={styles.clr}> 10% off</Text></Text>
                <View style={styles.row}>
                <Text style={styles.txt3}>-   1<Text style={styles.clr}>   +</Text></Text>
                <Text style={styles.txt4}>Save Later</Text>
                </View> 
                

            </View>
            </View>
            <View style={styles.div2}>
            <Text style={styles.text1}>Deliver To Sagarika Mohanty, Nandan Vihar,</Text>
            <Text style={styles.text2}>Patia, Bhubaneswar, 751024</Text>
            <Text style={styles.text3}>Deliver By 26 Feb 2022 | 10.00 PM</Text>
            <Text style={styles.text4}>Change Address</Text>
            </View>
            <View style={styles.square}>
            <View><Text style={styles.payment}>Payment Summary</Text></View>
        <View style={styles.div3}>
        <View style={styles.Row1}>
          <Text style={styles.last1}>Total MRP</Text>
          <Text style={styles.last2}>₹1240.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>Total Discount</Text>
          <Text style={styles.last2}>₹240.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>GST</Text>
          <Text style={styles.last2}>₹40.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>Shipping Fee</Text>
          <Text style={styles.free}>Free</Text>
        </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <Text style={styles.line}></Text>
      </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>Grand Total</Text>
          <Text style={styles.last2}>₹1040.00</Text>
        </View>
        </View>
        <View style={{alignItems: 'center', }}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity>
            <View style={styles.btn1}>
              <Text
                style={styles.btn2}
                onPress={() => navigation.navigate('Screen3')}>
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
        </View>
    )
};

const styles = StyleSheet.create ({
  free: {
    color: '#009987',
    marginRight: 10,
  },
  last2: {
    marginRight: 10,
  },
  btn1: {
    color: 'white',
    alignItems: 'center',
  },
  btn2: {
    color: 'white',
    marginTop: 5,
  },
  btn: {
    marginTop: 60,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 20,
    borderColor: '#37a987',
  },
    square: {
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.9,
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.27,
    borderColor: '#E1E1E1',

    },
    Row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    marginLeft: 15,
        },
        Row2: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          },
      line: {
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#E1E1E1',
        width: Dimensions.get('window').width * 0.81,
    },
     
      payment: {
        marginLeft: 17,
        marginTop: 12,
    color: 'black',
    },

    container: {
        backgroundColor: 'white',
        height: 800,
      },
    div1: {
        borderWidth: 2,
        flexDirection: 'row',
        height: 110,
        marginTop: 25,
        marginLeft: 20,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    borderColor:  '#E1E1E1',
    borderRadius: 10,
    },
    div2: {
        borderWidth: 2,
    borderColor:  '#E1E1E1',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: 148,
    marginTop: 15,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
    },
    heading: {
          marginLeft: 60,
          marginTop: 25,
        color: 'black',
    },
    img: {
       marginLeft: 12,
       marginTop: 12,
    },
    col2: {
          marginTop: 15,
       marginLeft: 30,
    },
    txt1: {
        fontSize: 12,
        color: 'black',
    },
    txt2: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
    txt3:{
        marginTop: 8,
 borderWidth: 1.5,
height: 20,
width: 59,
borderColor:  '#E1E1E1',
borderRadius: 5,
paddingLeft: 10,
fontSize: 12,
    },
    clr: {
        color: '#009987',
    },
    txt4: {
        marginLeft: 8,
        marginTop: 8,
 borderWidth: 1.5,
fontSize: 10,
borderRadius: 5,
borderColor:  '#E1E1E1',
height: 20,
width: 62,
paddingLeft: 5,
paddingTop: 2,
    },
    text1: {
     marginLeft: 10,
     marginTop: 10,
     fontSize: 12,
     color: 'black',
    },
    text2: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 12,
        color: 'black',
       },
       text3: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 12,
        color: 'black',
       },
       text4: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 12,
        color: 'black',
        borderWidth: 2,
    borderRadius: 5,
    borderColor: 'cyan',
    width: 130,
    paddingVertical: 6,
    paddingHorizontal: 13,
    color: '#009987',
       },
});

export default Screen2;

