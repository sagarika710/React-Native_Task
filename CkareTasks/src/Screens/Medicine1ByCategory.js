import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Medicines_Data from '../Components/Medicines_Data';
import SearchBar1 from '../Components/SearchBar1';
import Constants from 'expo-constants';

export default function Medicine1ByCategory({ navigation }) {
    var api = [ 
        {
            url: require('../assets/Paracetamol.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
        {
            url: require('../assets/anti-typhoidTabs.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
        {
            url: require('../assets/coughSyrup.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
        {
            url: require('../assets/mask.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
        {
            url: require('../assets/anti-typhoidTabs.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
        {
            url: require('../assets/Paracetamol.png'),
            name: 'Paracetamol 500mg',
            price: '₹ 80.00',
            originalPrice : '100',
            offer: '10% off',
        },
    ]
    return (

        <View style={styles.container}>
            {/* SearchBar */}
             <SearchBar1/>

             <View style={{flexWrap: 'wrap', flexDirection: 'row', marginTop: 15,}}>
               {
                   api.map((e)=> {
                       return(
                          <Medicines_Data data={e} />
                       );
                   }
                   )
               }
             </View>
             {/* <Medicines_Data data= {api[0] }/> */}
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
    },

})