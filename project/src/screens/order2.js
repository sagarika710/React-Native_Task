import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ordercomptwo from '../components/ordercomp2'
import Icon1 from 'react-native-vector-icons/AntDesign';

const Ordertwo = ({ navigation }) => {
    var opi= [
        {
            
            name:'Consultant',
        },
        
    ]
    return (
        <ScrollView style={styles.contrainer}>

<View style={styles.startedbtn} ><Icon1 name='left' style={styles.backicon} onPress={() => navigation.navigate('Order')} size={20} /></View>

     
  
  
  {
     opi.map((dinesh4)=> {
         return(
             <Ordercomptwo data={dinesh4}/>
         )
     }) 
  }
<TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Mapp2')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
};
export default Ordertwo


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
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