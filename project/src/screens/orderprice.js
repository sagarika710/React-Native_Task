import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Price from '../components/orderpricecomp'
import Backicon from '../components/backordercomp';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Orderprice = ({ navigation }) => {
    var opi = [
        {

            name: 'Order details',
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
     zpi.map((dinesh1)=> {
         return(
             <Backicon data={dinesh1}/>
         )
     }) 
  } 
      

            {
                opi.map((dinesh4) => {
                    return (
                        <Price data={dinesh4} />
                    )
                })
            }


<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Mapp')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>




        </ScrollView>


    );

};

export default Orderprice

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },

}
)
