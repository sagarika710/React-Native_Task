import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, ScrollView, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import bgImg from '../assets/maps.png';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import CheckBox from '@react-native-community/checkbox';

export default function AmbulanceOrder1 ({ navigation }) {
    // const [cash, setcash] = useState("false");
    // const [online, setonline] = useState("false");

    return (
        <ImageBackground source={bgImg} style={styles.container}>
            <TouchableOpacity style={styles.horizontalLinesIconDiv}>
                <Foundation name="graph-horizontal" size={24} color="black" />
            </TouchableOpacity>

            <View style={{ height: Dimensions.get('window').height * 0.45 }}></View>
            <View style={styles.whiteMainDiv}>
                <View style={styles.whiteDiv}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/Rectangle246.png')} />
                    </View>
                    <View >
                        <Text style={styles.pickupTxt}>Pickup Address</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <View>
                                <Image source={require('../assets/Round1.png')} />
                            </View>
                            <View>
                                <TextInput value='Kanan Vihar, Bhubaneswar' style={styles.patiaTxt} />
                            </View>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.destinationTxt}>Destination Address</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <View>
                                <Image source={require('../assets/Round2.png')} />
                            </View>
                            <View>
                                <TextInput value='Kanan Vihar, Bhubaneswar' style={styles.patiaTxt} />
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.arrivalTimePriceDiv}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View>
                                    <Text style={styles.arrivalTimeTxt}>Arrival Time</Text>
                                </View>
                                <View>
                                    <Text style={styles.arrivalTimeTxt}>Price</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View>
                                    <Text style={styles.arrivalTimeTxt}>5 min</Text>
                                </View>
                                <View>
                                    <Text style={styles.arrivalTimeTxt}>₹250</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#e1e1e1', }}>
                                <View>
                                    <Text style={styles.paymentMethodTxt}>Payment Method</Text>
                                </View>
                                {/* <View>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View> */}
                            </View>
                        </View>
                    </View>
                    <View style={{ height: Dimensions.get('window').height * 0.025 }}></View>
                    <View style={{ justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <LinearGradient colors={['#00E0C5', '#009987']} style={styles.confirmBtnDiv}>
                                    <TouchableOpacity style={styles.confirmBtn} onPress={() => navigation.navigate('AmbulanceOrder2')}>
                                        <Text style={styles.confirmBtnTxt}>Confirm</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View >
                                <TouchableOpacity style={styles.cancelBtnDiv}>
                                    <View style={styles.cancelBtn}>
                                        <Text style={styles.cancelBtnTxt}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    horizontalLinesIconDiv: {
        width: 45,
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 60,
        left: 20,
    },
    whiteMainDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteDiv: {
        height: Dimensions.get('window').height * 0.55,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    pickupTxt: {
        color: '#555B6A',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 15,
        marginTop: 20,
    },
    patiaTxt: {
        color: '#030919',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 15,
        marginLeft: 10,
    },
    destinationTxt: {
        color: '#555B6A',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 15,
    },
    arrivalTimePriceDiv: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.16,
        padding: 15,
        marginBottom: 20
    },
    arrivalTimeTxt: {
        color: '#030919',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10
    },
    paymentMethodTxt: {
        color: '#030919',
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 10,

    },
    // button
    confirmBtnDiv: {
        width: Dimensions.get('window').width * 0.4,
        // padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    confirmBtn: {
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmBtnTxt: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10,
        color: '#fff',
        // textShadowOffset: 5,
    },
    cancelBtnDiv: {
        width: Dimensions.get('window').width * 0.4,
        // padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00E0C5'
    },
    cancelBtn: {
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelBtnTxt: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10,
        color: '#000',
        // textShadowOffset: 5,
    }


})