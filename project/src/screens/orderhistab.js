import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ordercomp1 from '../components/ordercomp1'; 
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Orderheadingcomp from '../components/ordersheading';
import Backicon from '../components/backordercomp';



const Orderheading = ({ navigation }) => {
  
    var zpi= [
        {
            

            booking: 'Bookings',
            order:'Orders',
            test:'Test',


        },
       
    ]
  
  
  
    var xpi= [
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
             <Orderheadingcomp data={dinesh1}/>
         )
     }) 
  } 
            
  {
     xpi.map((dinesh2)=> {
         return(
             <Ordercomp1 data={dinesh2}/>
            
         )
     }) 
  }      

            <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Orderprice')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>

    
        </ScrollView>
    );
};
export default Orderheading


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

   

})