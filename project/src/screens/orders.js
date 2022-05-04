import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ordercomp from '../components/ordercomp';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Order = ({ navigation }) => {
    var ypi= [
        {
            
            name:'Consultant',
        },
        
    ]
    return (
        <ScrollView style={styles.contrainer}>

        <View style={{marginTop:30,marginLeft:30,}}>
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Ordertwo')}> <Icon name='leftcircleo'  style={styles.backicon} size={30} /></Text>
            </TouchableOpacity>
            </View>
  
  
  
  {
     ypi.map((dinesh3)=> {
         return(
             <Ordercomp data={dinesh3}/>
         )
     }) 
  }

<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('prescription')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
};
export default Order


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
   

})