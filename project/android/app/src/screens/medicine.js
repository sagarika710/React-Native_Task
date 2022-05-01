import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Medicine from '../components/medicine'
import Medicine2 from '../components/medicine2'
import Medicine3 from '../components/medicine3';
import Icon1 from 'react-native-vector-icons/AntDesign';


const Med = ({ navigation }) => {
    var api = [
        {
           
            centername: 'Order with prescription or MRN Number',
            name: 'Upload your prescription or enter your MRN',
            name1:' Number to get all medicines.',
            bookingtype: 'Order Now',
            
        },
      
    ]
    var bpi = [
        {
            url: require('../Assests/dettolimg1.png'),
            bookingtype: 'Covid-19 ',
            bookingtype2:'Essential',
            
        },
        {
            url: require('../Assests/iconimg1.png'),         
            bookingtype: 'Baby & Mom',
            bookingtype2:'Care',
            
        },
        {
            url: require('../Assests/horlicks.png'),
            bookingtype: 'Covid-19 ',
            bookingtype2:'Essential',
            
        },
        {
           
            url: require('../Assests/toothpaste.png'),
            bookingtype: 'Covid-19 ',
            bookingtype2:'Essential',
            
        },
    ]

    var cpi = [
        {
            url: require('../Assests/apollo.png'),
            bookingtype: 'Apollo Medicine Store',
          
        },
        {
           
            url: require('../Assests/apollo2.png'),
            bookingtype: 'Apollo Medicine Store',
            
        },
        {
            url: require('../Assests/apollo3.png'),
            bookingtype: 'Apollo Medicine Store',
            
        },
      
    ]
    
    return (
        <ScrollView style={styles.contrainer}>
                <View style={styles.search}>
                    <TextInput placeholder='Search Medicines & Health Products'></TextInput>
                </View>


            <ScrollView >
                <View style={styles.king}>

                    {
                        api.map((dinesh) => {
                            return (
                                <Medicine data={dinesh} />

                            )
                        })
                    }
                </View>
            </ScrollView>

            <ScrollView >
                <View style={styles.king}>

                    {
                        bpi.map((dinesh) => {
                            return (
                                <Medicine2 data={dinesh} />
                            )
                        })
                    }
                </View>
            </ScrollView>
            <ScrollView >
                <View style={styles.king}>

                    {
                        bpi.map((dinesh) => {
                            return (
                                <Medicine2 data={dinesh} />
                            )
                        })
                    }
                </View>
            </ScrollView>

            <ScrollView >
                <View>

                    {
                        cpi.map((dinesh) => {
                            return (
                                <Medicine3 data={dinesh} />
                            )
                        })
                    }
                </View>
            </ScrollView>

            <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Orderhistory')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>


        </ScrollView>
    );
};
export default Med


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    king: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    search:{
            
            marginHorizontal:15,
            marginVertical:10,
            borderRadius:13,
            backgroundColor:'#EFF3FA',
            paddingHorizontal:10,

    },


})
