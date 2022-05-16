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

export default function PaymentSummaryData(props) {
    return (
       <View style={styles.mainDiv}>
           <View style={styles.row}>
               <View><Text style={styles.allTxts}>Cost</Text></View>
               <View><Text style={styles.allTxts}>{props.data.cost}</Text></View>
           </View>
           <View style={styles.row}>
               <View><Text style={styles.allTxts}>GST</Text></View>
               <View><Text style={styles.allTxts}>{props.data.gst}</Text></View>
           </View>
           <View style={styles.row}>
               <View><Text style={styles.allTxts}>Paid Amount</Text></View>
               <View><Text style={styles.allTxts}>{props.data.paidamount}</Text></View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    mainDiv: {

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    allTxts: {
        color: '#717171',
        fontSize: 12,
        fontWeight: '500',
    }

})