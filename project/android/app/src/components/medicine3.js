import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';

const Medicine3 = (props) => {
    return (
       
        <View style={styles.mainview}>
           
           
            <View style={styles.detailsview}>
              
                <View style={{ flexDirection: 'row', justifyContent:'center'}}>
                <Image source={props.data.url} style={{ width: 330,borderRadius:10, height: 130 }} />
                    
                </View>

            </View>

           <View style={{flexDirection:'row',justifyContent:"flex-start", paddingHorizontal:20,paddingVertical:10,}}>
               <Text style={{fontSize:14,fontWeight:'bold',color: '#009987', fontSize:15, fontWeight:'bold',}}>{props.data.bookingtype}</Text>
             
           </View>
       
        </View>
       

    );
};
export default Medicine3


const styles = StyleSheet.create({

    mainview: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal:10,
        borderColor:'#DFDDDD',
        backgroundColor:'#ffffff',
        shadowColor: "#000",
    
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
paddingVertical:10,
paddingHorizontal:5,

elevation: 5,
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222'
    },
    detailsview: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingVertical:10,
        marginVertical:10,
       
        borderColor:"#DFDDDD",
        

    },
    

})