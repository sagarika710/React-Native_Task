import * as React from 'react';
import { View, Text,Image,Dimensions,TouchableOpacity,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const Screen = ({navigation}) => {
    return(
        <View style={styles.container}>

          <View>
          <Image style={styles.bicon}  source={require('../assets/backicon2.png')} />
          </View>
            <View style={styles.div}>
            <View style={styles.row1}>
          <Image style={styles.img1} source={require('../assets/lifecare.png')}/> 
          </View>
          <View style={styles.row2}>
          <Text style={styles.txt1}>Life Care Pathology</Text>    
          <Text style={styles.txt2}>⭐️⭐️⭐️⭐️⭐️</Text>    
          <Text style={styles.txt3}>Open : 10.30AM - 5.30PM</Text>    
          </View>
          </View>
          <View style={styles.div1}>
          <Text style={styles.txt4}>Order with prescription or MRN Number</Text>    
          <Text style={styles.txt5}>Upload your prescription or enter your MRN</Text>    
          <Text style={styles.txt6}>Number to book for test.</Text>  
          <View style={styles.line11}>
          <Text style={styles.txt7}>Book Now</Text>  
          <Image style={styles.pause} source={require('../assets/pause.png')}/>   
            </View>  
          </View>
          <Text style={styles.txt8}>Test Available Here</Text>  
          <TouchableOpacity style={styles.div2}>
          <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Complete Blood Count (CBC)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>  
              </View> 
              <View style={styles.Row2}>
              {/* <Image style={styles.img2} source={require('../assets/Vector.png')}/>  */}
              </View>
              </View> 
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div3}>
              <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyroid Stimulating Hormone (TSH)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              {/* <Image style={styles.img3} source={require('../assets/Vector.png')}/>  */}
              </View>
              </View>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div3}>
              <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Liver Function Test</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              {/* <Image style={styles.img4} source={require('../assets/Vector.png')}/>  */}
              </View>
              </View> 
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div3}>
              <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyphoid Test</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              {/* <Image style={styles.img5} source={require('../assets/Vector.png')}/>  */}
              </View>
              </View> 
              </TouchableOpacity> 
              <TouchableOpacity style={styles.div3}>
              <View style={styles.thyroid}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyroid Stimulating Hormone (TSH)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              {/* <Image style={styles.img6} source={require('../assets/Vector.png')}/>  */}
              </View>
              </View> 
              </TouchableOpacity> 
              <View style={{alignItems: 'center',}}>
          <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
             <TouchableOpacity >
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={styles.btn1} onPress={() => navigation.navigate('Screen1')}>Next</Text>
          </View>

          </TouchableOpacity>
          </LinearGradient>
          </View>
        </View>
    )
};

const styles = StyleSheet.create({
  bicon: {
    marginLeft: 10,
  },
  Row2: {
    justifyContent: 'center'
  },
  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    },
    btn: {
      borderRadius: 20,
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').width*0.09,
       marginTop: 20,
  },

  pause: {
   marginTop: 5,
  },
  line11:{
   flexDirection: 'row',
  },
  thyroid: {
       justifyContent: 'space-between',
       flexDirection: 'row',
  },
    txt1: {
          color: '#222222',
    },
    txt2: {
        color: '#FFC000',
        fontSize: 10,
        marginTop: 3,
  },
  txt3: {
    color: '#222222',
    fontSize: 10,
    marginTop: 5,
},
    row2: {
        marginHorizontal: 20,
        marginTop: 12,    
    },
    img1: {
         borderWidth: 1,
        borderColor:  '#E1E1E1',
        borderRadius: 10,
    },

    clr: {
        color: '#009987',
    },
    container: {
    backgroundColor: 'white',
    flex: 1,
    },
    div: {
      marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width*0.7,
        marginLeft: 15,
    },
    div2: {
      justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#15dcd3',
        width: Dimensions.get('window').width*0.92,
        marginHorizontal: 15,
        borderRadius: 10,
        height: 50,
        marginTop: 5,
        marginVertical:2,
    },
    div3: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:  '#E1E1E1',
        width: Dimensions.get('window').width*0.92,
        marginHorizontal: 15,
        // paddingHorizontal: 5,
        borderRadius: 10,
        height: 50,
        marginVertical:2,
    },
    div1: {
      paddingTop: 8,
      paddingLeft: 8,
        borderWidth: 1,
        borderColor: '#15dcd3',
        height: Dimensions.get('window').height*0.15,
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 10,
        width: Dimensions.get('window').width*0.92,
    },
    txt4: {
      color: '#222222',
    },
    txt5: {
        fontSize: 10,
        marginTop: 8,
      },
      txt6: {
        fontSize: 10,
      },
      txt7: {
        fontSize: 13,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#37a987',
      },
      txt8: {
       color: '#222222',
       marginLeft: 20,
       marginVertical: 10,
      },
      txt9: {
        color: '#222222',
        marginLeft: 15,
        marginTop: 7,
        fontSize: 11,
       },
       txt10: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 9,
       },


})
export default Screen;