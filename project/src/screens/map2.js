import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Mapcomp from '../components/orderpricecomp'
import map from '../Assests/maps.png'
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");



const Mapp2 = ({ navigation }) => {
    // var opi = [
    //     {

    //         name: 'Order details',
    //     },

    // ]

    return (
        <View style={styles.contrainer}>

           <View style={{height:Dimensions.get('window').height * 1}}>
<ImageBackground source={map} resizeMode="cover" style={styles.image}></ImageBackground>


<View style={styles.bottomdiv}>


<View style={styles.firstrowdiv}>
    <View><Image style={{height:45,width:49}} source={require('../Assests/Ellipse.png')}></Image></View>
    <View style={{marginRight:100,}}>
        <Text>Mr. Mohanty</Text>
        <Image style={{height:10,width:70}} source={require('../Assests/Group.png')}></Image>
    </View>
    <View>
    <Image style={{height:35,width:39}} source={require('../Assests/circle.png')}></Image>
    </View>
 
</View>

<View style={styles.secondrowdiv}>
    <View style={{marginBottom:20}}><Text>Order Id: Ckare123456</Text></View>
   
    <View style={styles.deliverytime}>
        <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
    <View><Image style={{height:30,width:30,marginRight:10,}} source={require('../Assests/clock.png')}></Image></View>
    <View><Text>Delivery Time</Text><Text>30 Minutes</Text></View>
    </View>


    <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
    <View><Image style={{height:25,width:23,marginRight:10,}} source={require('../Assests/home.png')}></Image></View>
    <View><Text>Delivery Address</Text><Text>13 Nandan Vihar</Text></View>
    </View>
    </View>
 
</View>

{/* 
<View style={styles.button} ><Text style={{color:'white'}}>Order Details</Text></View> */}


<View style={styles.mainview}>
            <View style={styles.detailsview}>
                <TouchableOpacity onPress={() => navigation.navigate('Testhistory')}>

                    <LinearGradient colors={['#00E0C5', '#009987',]} style={styles.linearGradient} >
                        <Text style={styles.buttonText}>
                            Order Details
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>

</View>
{/* 
<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Testhistory')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}



           
</View>

        </View>


    );

};

export default Mapp2

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
            borderWidth:1,
            height:Dimensions.get('window').height * 0.6,
            width:Dimensions.get('window').width * 1,
    },
    firstrowdiv:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    borderWidth:1,
                    borderColor:'#DFDDDD',
                    paddingHorizontal:10,
                    paddingVertical:15,
                    marginHorizontal:10,
                    marginVertical:10,
                    borderRadius: 10,
                    
    },
    bottomdiv:{
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
       paddingVertical:40,
        marginTop:-70,
        height:Dimensions.get('window').height * 0.6,
    },
    secondrowdiv:{
        justifyContent:'space-between',
        
        borderWidth:1,
        borderColor:'#DFDDDD',
        paddingHorizontal:10,
        paddingVertical:20,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius: 10,
        marginBottom:20,
        
    },
    deliverytime:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                  paddingRight:15,
                  
    },
    button:{
                justifyContent:'center',
                flexDirection:'row',
                borderRadius:20,
                marginHorizontal:15,
                paddingVertical:15,
                marginVertical:10,
                backgroundColor:'#009987',
                
    },
    mainview: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
    linearGradient: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        width: Dimensions.get('window').width * 0.80,
    },
    buttonText: {
        fontSize: 18,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        // margin: 10,
        color: 'white',
        marginVertical: 10,
        backgroundColor: 'transparent',

        paddingVertical: 2,
    },


}
)
