import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Iconz from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Testbuttoncomp from '../components/ordercomp3';
import Ordercomp1 from '../components/ordercomp1';
import Backicon from '../components/backordercomp';



const Testhistory = ({ navigation }) => {
    var tpi= [
        {
            // url: require('../assets/img/Cricket_icon.png'),
            centername: 'Consultant',
            name: 'Video Conference',
            time: '06.30',
            date: '22.02.2022',
            bookingtype: 'Upcoming',
            price: '₹240'
        },
        {
            // url: require('../assets/img/Cricket_icon.png'),
            centername: 'Consultant',
            name: 'Video Conference',
            time: '06.30',
            date: '22.02.2022',
            bookingtype: 'Upcoming',
            price: '₹240'
        },
          {
            // url: require('../assets/img/Cricket_icon.png'),
            centername: 'Consultant',
            name: 'Video Conference',
            time: '06.30',
            date: '22.02.2022',
            bookingtype: 'Upcoming',
            price: '₹240'
        },
        {
            // url: require('../assets/img/Cricket_icon.png'),
            centername: 'Consultant',
            name: 'Video Conference',
            time: '06.30',
            date: '22.02.2022',
            bookingtype: 'Upcoming',
            price: '₹240'
        },
        {
            // url: require('../assets/img/Cricket_icon.png'),
            centername: 'Consultant',
            name: 'Video Conference',
            time: '06.30',
            date: '22.02.2022',
            bookingtype: 'Upcoming',
            price: '₹240'
        },
    ]

        var gpi= [
            {
                booking: 'Bookings',
                order:'Orders',
                test:'Test',
    
            },  
        ]
        var zpi= [
            {
                
    
                booking: 'Bookings',
                order:'Orders',
                test:'Test',
    
    
    
            },
           
        ]
     
       
      
     
    
    return (
        <ScrollView style={styles.contrainer}> 
       

{
     gpi.map((dinesh1)=> {
         return(
             <Backicon data={dinesh1}/>
         )
     }) 
  } 
  
        {
     zpi.map((dinesh1)=> {
         return(
             <Testbuttoncomp data={dinesh1}/>
         )
     }) 
  } 
       
  
            
         
            
  {
     tpi.map((dinesh6)=> {
         return(
             <Ordercomp1 data={dinesh6}/>
         )
     }) 
  }   

<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Ordertwo')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>


    
        </ScrollView>
    );
};
export default Testhistory


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    backicon:{
        backgroundColor:'#EFF3FA',
        borderRadius:50,
           },

           headingdiv:{
            justifyContent:'flex-start',
            flexDirection:'row',
            paddingHorizontal:16,
            paddingTop:50,
            alignItems:'center',
        },
        textheading:{
            fontSize:20,
           paddingVertical:5,
            paddingHorizontal:10,
        },
        backicon:{
            backgroundColor:'#EFF3FA',
            borderRadius:30,
           marginRight:16,
            padding:10,
            width:43,
               },
        startedbtn: {
            
                borderRadius: 20,
               paddingTop:40,
               paddingBottom:20,
                width: 80,
                color: 'black',
                marginLeft: 20,
                marginTop: 10,
              },


   

})