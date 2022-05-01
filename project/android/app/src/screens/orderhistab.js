import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Historycomp from '../components/orderhistabcomp';
import Iconz from 'react-native-vector-icons/AntDesign';
import Headingorder from '../components/heading';
import Orderheadingcomp from '../components/ordersheading'
import Icon1 from 'react-native-vector-icons/AntDesign';



const Orderhistab = ({ navigation }) => {
    var api= [
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
    return (
        <ScrollView style={styles.contrainer}> 
            <View  style={styles.headingdiv}>
            <View >
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Login')}> <Iconz name='leftcircleo' style={styles.backicon} size={30} /></Text>
            </TouchableOpacity>
           
            </View>
           <View>
           <Text style={styles.textheading}>Orders History</Text>
           </View>
           </View>

           <Orderheadingcomp />
            
  {
     api.map((dinesh)=> {
         return(
             <Historycomp data={dinesh}/>
         )
     }) 
  }   

   <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Let')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>

    
        </ScrollView>
    );
};
export default Orderhistab


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