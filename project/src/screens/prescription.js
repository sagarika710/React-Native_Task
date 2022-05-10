import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Precomp from '../components/precomp';
import Backicon from '../components/backordercomp';
import Icon1 from 'react-native-vector-icons/AntDesign';

const prescription = ({ navigation }) => {
    var opi = [
        {

            name: 'Consultant',
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
                        <Precomp data={dinesh4} />
                    )
                })
            }

{/* <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Orderheading')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}





        </ScrollView>


    );

};

export default prescription

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },

}
)
