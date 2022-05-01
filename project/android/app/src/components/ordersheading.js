import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

 


const Orderheadingcomp = () => {
    return (
       
        <View style={styles.mainview}>
           
           
            <View style={styles.twonodiv}>
           <View style={styles.bookings}>
            <Text style={styles.bookingstext}>Bookings</Text>
           </View>
           <View style={styles.orders}>
           <Text  style={styles.orderstext} >Orders</Text>     
           </View>
           <View style={styles.tests}>
           <Text>Test</Text>
           </View>
            </View>
            
           
       
        </View>
       

    );
};
export default Orderheadingcomp


const styles = StyleSheet.create({

    mainview: {
       
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal:10,
        borderColor:'#DFDDDD',
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        justifyContent:'space-evenly',
    },
    
    backicon:{
             backgroundColor:'#EFF3FA',
             borderRadius:30,
             marginRight:10,
             
             
                },

                headingdiv:{
                    justifyContent:'flex-start',
                    flexDirection:'row',
                    paddingHorizontal:5,
                    paddingVertical:5,
                },
                textheading:{
                    fontSize:20,
                   paddingVertical:10,
                    paddingHorizontal:70,
                },

                twonodiv:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    borderWidth:1,
                    borderColor:'#C9CCD3',
                    paddingHorizontal:10,
                    paddingVertical:9,
                    marginHorizontal:10,
                    marginVertical:10,
                    borderRadius:5,
                },
                bookings:{
                   
                    // backgroundColor:'#009987',
                    // borderRadius:5,
                    
                
                },
                bookingstext:{
                            paddingHorizontal:14,
                            paddingVertical:8,
                            // color:'white',
                },

                orderstext:{


                    color:'white',




                },





                orders:{
                        justifyContent:'center',
                       paddingHorizontal:20,
                        backgroundColor:'#009987',
                         borderRadius:5,
                        
                         marginRight:15,
                },
                tests:{
                        justifyContent:'center',
                        paddingRight:10,
                },


})