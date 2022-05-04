import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Mapcomp from '../components/orderpricecomp'
import map from '../Assests/maps.png'
import Icon1 from 'react-native-vector-icons/AntDesign';



const Mapp = ({ navigation }) => {
    // var opi = [
    //     {

    //         name: 'Order details',
    //     },

    // ]

    return (
        <ScrollView style={styles.contrainer}>

            {/* {
                opi.map((dinesh4) => {
                    return (
                        <Mapcomp data={dinesh4} />
                    )
                })
            } */}
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
    <View><Text>Order Id: Ckare123456</Text></View>
   
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


<View style={styles.button} ><Text style={{color:'white'}}>Order Details</Text></View>

</View>

<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Testhistory')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>


           


        </ScrollView>


    );

};

export default Mapp

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
            borderWidth:1,
            height:500,
            width:400,
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
       paddingVertical:50,
        marginTop:-70,
    },
    secondrowdiv:{
        justifyContent:'space-between',
        height:130,
        borderWidth:1,
        borderColor:'#DFDDDD',
        paddingHorizontal:10,
        paddingVertical:30,
        marginHorizontal:10,
        marginVertical:10,
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

}
)
