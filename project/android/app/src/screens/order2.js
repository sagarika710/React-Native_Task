import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ordercomptwo from '../components/ordercomp2'

const Ordertwo = ({ navigation }) => {
    var api= [
        {
            
            name:'Consultant',
        },
        
    ]
    return (
        <ScrollView style={styles.contrainer}>

     
  
  
  {
     api.map((dinesh)=> {
         return(
             <Ordercomptwo data={dinesh}/>
         )
     }) 
  }

            
        </ScrollView>
    );
};
export default Ordertwo


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
   

})