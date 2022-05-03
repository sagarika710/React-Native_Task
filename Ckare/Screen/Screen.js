import * as React from 'react';
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native';

const Screen = ({navigation} ) => {
    return(
        <View style={styles.container}>
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
          <Text style={styles.txt7}>Book Now</Text>    
          </View>
          <Text style={styles.txt8}>Test Available Here</Text>   
          <View style={styles.div2}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Complete Blood Count (CBC)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              <Image style={styles.img2} source={require('../assets/Vector.png')}/> 
              </View>
              </View> 
              <View style={styles.div3}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyroid Stimulating Hormone (TSH)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              <Image style={styles.img3} source={require('../assets/Vector.png')}/> 
              </View>
              </View> 
              <View style={styles.div3}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Liver Function Test</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              <Image style={styles.img4} source={require('../assets/Vector.png')}/> 
              </View>
              </View> 
              <View style={styles.div3}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyphoid Test</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              <Image style={styles.img5} source={require('../assets/Vector.png')}/> 
              </View>
              </View> 
              <View style={styles.div3}>
          <View style={styles.Row1}>
          <Text style={styles.txt9}>Thyroid Stimulating Hormone (TSH)</Text>   
          <Text style={styles.txt10}>Price : ₹ 350.00<Text style={styles.clr}> 10% off</Text></Text>   
              </View> 
              <View style={styles.Row2}>
              <Image style={styles.img6} source={require('../assets/Vector.png')}/> 
              </View>
              </View> 
              <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen1')}>Next</Text>
          </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    txt1: {
          color: 'black',
    },
    txt2: {
        color: '#FFC000',
        fontSize: 10,
        marginTop: 3,
  },
  txt3: {
    color: 'black',
    fontSize: 10,
    marginTop: 5,
},
    row2: {
        marginLeft: 20,
        marginTop: 12,    
    },
    img1: {
         borderWidth: 1,
        borderColor:  '#E1E1E1',
        borderRadius: 10,
    },
    btn1: {
        color: 'white',
       },
    btn: {
        marginLeft: 10,
        marginTop: 50,
        borderWidth: 1,
        paddingHorizontal: 168,
        paddingVertical: 10,
        marginLeft: 20,
        width: 370,
      borderRadius: 20,
      backgroundColor: '#00E0C5',
      borderColor: '#15dcd3',
    },
    clr: {
        color: '#009987',
    },
    container: {
    backgroundColor: 'white',
    height: 1000,
    },
    div: {
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: 22,
    },
    div2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#15dcd3',
        width: 370,
        marginLeft: 20,
        borderRadius: 10,
        height: 50,
        marginTop: 20,
    },
    div3: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:  '#E1E1E1',
        width: 370,
        marginLeft: 20,
        borderRadius: 10,
        height: 50,
        marginTop: 15,
    },
    div1: {
        borderWidth: 1,
        borderColor: '#15dcd3',
        height: 130,
        width: 370,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 15,
        paddingTop: 18,
    },
    txt4: {
      color: 'black',
    },
    txt5: {
        fontSize: 11,
        marginTop: 18,
      },
      txt6: {
        fontSize: 11,
      },
      txt7: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 8,
        color: '#37a987',
      },
      txt8: {
       color: 'black',
       marginLeft: 20,
       marginTop: 16,
      },
      txt9: {
        color: 'black',
        marginLeft: 15,
        marginTop: 7,
        fontSize: 11,
       },
       txt10: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 9,
       },
       img2:{
        marginLeft: 165,
        marginTop: 20,
      },
      img3:{
        marginLeft: 128,
        marginTop: 20,
      },
      img4:{
        marginLeft: 218,
        marginTop: 20,
      },
      img5:{
        marginLeft: 218,
        marginTop: 20,
      },
      img6:{
        marginLeft: 128,
        marginTop: 20,
      },

})
export default Screen;