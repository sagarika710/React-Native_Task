import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from '../Components/SearchBar';
import { Entypo } from '@expo/vector-icons';
import Cart_Component from '../Components/CartComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Medicine3ByCategory({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* first row */}
                <View >
                    <Cart_Component />
                </View>
                {/* Added to cart div */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.AddedToCartDiv}>
                        {/* left div */}
                        <View style={styles.AddedToCartLeftDiv}>
                            <Image source={require('../assets/Paracetamol2.png')} />
                        </View>
                        {/* right div  */}
                        <View style={styles.AddedToCartRightDiv}>
                            <Text>Paracetamol 500Mg</Text>
                            <View style={styles.priceDiv}>
                                <Text style={styles.priceTxt}>₹ 80.00 </Text>
                                <Text style={styles.originalPriceTxt}> 100 </Text>
                                <Text style={styles.offerTxt}> 10% off</Text>
                            </View>
                            <View style={styles.quantityAddedSaveLaterDiv}>
                                <View style={styles.quantityAddedDiv}>
                                    <TouchableOpacity>
                                        <Entypo name="minus" size={12} color="#858585" />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={styles.Txt1}> 1 </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Entypo name="plus" size={12} color="#009987" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.saveLaterTxtDiv}>
                                    <Text style={styles.saveLaterTxt}>Save Later</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <AntDesign name="delete" size={15} color="#F5154F" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* delivery address div */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.deliveryAddressMainDiv}>
                        <View style={styles.addressDiv}>
                            <Text style={styles.deliverTxt}>Deliver to Sagarika Mohanty, Nandan Vihar,</Text>
                            <Text style={styles.deliverTxt}>Patia, Bhubaneswar, 751024</Text>
                        </View>
                        <View>
                            <Text style={styles.deliveryTimeTxt}>Deliver by 26 Feb 2022 | 10.00 PM</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.changeAddressDiv}>
                                <Text style={styles.changeAddressTxt}>Change Address</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* payment summary div */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.paymentSummaryMainDiv}>
                        <View>
                            <Text style={styles.paymentSummaryTxt}>Payment Summary</Text>
                        </View>
                        <View>
                            <View style={styles.paymentTxtsDiv}>
                                <View>
                                    <Text style={styles.paymentTxts}>Total MRP</Text>
                                </View>
                                <View>
                                    <Text style={styles.paymentTxts}>₹ 1240.00 </Text>
                                </View>
                            </View>
                            <View style={styles.paymentTxtsDiv}>
                                <View>
                                    <Text style={styles.paymentTxts}>Total Discount</Text>
                                </View>
                                <View>
                                    <Text style={styles.paymentTxts}>₹ 240.00 </Text>
                                </View>
                            </View>
                            <View style={styles.paymentTxtsDiv}>
                                <View>
                                    <Text style={styles.paymentTxts}>GST</Text>
                                </View>
                                <View>
                                    <Text style={styles.paymentTxts}>₹ 40.00 </Text>
                                </View>
                            </View>
                            <View style={styles.paymentTxtsDiv}>
                                <View>
                                    <Text style={styles.paymentTxts}>Shipping Fee</Text>
                                </View>
                                <View>
                                    <Text style={styles.freeTxt}>FREE</Text>
                                </View>
                            </View>
                            <View style={styles.grandTotalTxtDiv}>
                                <View>
                                    <Text style={styles.paymentTxts}>Grand Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.paymentTxts}> ₹ 1040.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* payment method div */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.paymentMethodMainDiv}>
                        <View>
                            <Text style={styles.paymentSummaryTxt}>Payment Method</Text>
                        </View>
                        <View style={styles.paymentMethodTopDiv}>
                            <View style={styles.paymentMethodLeftDiv}>
                                <View>
                                    <AntDesign name="creditcard" size={15} color="#3E64FF" onPress={() => navigation.navigate('Medicine3ByCategory')}  />
                                </View>
                                <View>
                                    <Text style={styles.onlineTxt}  onPress={() => navigation.navigate('Medicine3ByCategory')} >Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.paymentMethodBottomDiv}>
                            <View style={styles.paymentMethodLeftDiv}>
                                <View>
                                    <MaterialCommunityIcons name="cash" size={15} color="#09960E" />
                                </View>
                                <View>
                                    <Text style={styles.onlineTxt}>Cash</Text>
                                </View>
                            </View>
                            <View style={styles.paymentMethodRightDiv}>
                                <View>
                                    <AntDesign name="checkcircle" size={15} color="#09960E" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* button */}
                <View style={{ alignItems: 'center' }}>
                    <LinearGradient colors={['#00E0C5', '#009987']} style={styles.proceedToPayBtnDiv}  >
                        <TouchableOpacity style={styles.proceedToPayBtn} onPress={() => navigation.navigate('AddressAndPayment1')} >
                            <Text style={styles.proceedToPayBtnTxt} >Check Out</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
    },
    AddedToCartDiv: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.13,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
    },
    priceDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    priceTxt: {
        color: '#000',
        letterSpacing: 0.3,
        fontSize: 10,
        fontWeight: '500',
        marginRight: 4,
        marginBottom: 5,
    },
    originalPriceTxt: {
        color: '#000',
        letterSpacing: 0.3,
        fontSize: 10,
        fontWeight: '500',
        marginRight: 4,
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    offerTxt: {
        color: '#009987',
        letterSpacing: 0.3,
        fontSize: 10,
        fontWeight: '500',
        marginRight: 4,
        marginBottom: 5,
    },
    quantityAddedSaveLaterDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityAddedDiv: {
        // width: 50,
        // height: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    Txt1: {
        color: '#979797',
        fontWeight: '400',
        fontSize: 10,
    },
    saveLaterTxtDiv: {
        // width: 57,
        // height: 18,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    saveLaterTxt: {
        fontSize: 10,
        fontWeight: '400',
        color: '#979797',
    },
    deliveryAddressMainDiv: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.2,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
        marginVertical: 15,
    },
    addressDiv: {
        justifyContent: 'flex-start',
        marginBottom: 13,
    },
    deliverTxt: {
        color: '#231F20',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5,
    },
    deliveryTimeTxt: {
        color: '#231F20',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 20,
    },
    changeAddressDiv: {
        width: 120,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00E0C5',
    },
    changeAddressTxt: {
        color: '#00E0C5',
        fontSize: 12,
        fontWeight: '500',
    },
    paymentSummaryMainDiv: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.28,
        paddingTop: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
        marginBottom: 15,
    },
    paymentSummaryTxt: {
        color: '#222',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.3,
        marginBottom: 10,
    },
    paymentTxtsDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    paymentTxts: {
        fontSize: 12,
        fontWeight: '500',
        color: '#717171',
    },
    freeTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: '#009987',
    },
    grandTotalTxtDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
    },
    // payment methods
    paymentMethodMainDiv: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.2,
        paddingTop: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
        marginBottom: 15,
    },
    paymentMethodTopDiv: {
        width: 304,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e1e1e1',
        marginBottom: 10,
    },
    paymentMethodBottomDiv: {
        width: 304,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00E0C5',
    },
    paymentMethodLeftDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    onlineTxt: {
        marginLeft: 20,
        color: '#222',
        fontSize: 12,
        fontWeight: '600',
    },
    cashTxt: {
        marginLeft: 20,
        color: '#222',
        fontSize: 12,
        fontWeight: '600',
    },

    // button
    proceedToPayBtnDiv: {
        width: 356,
        padding: 5,
        marginBottom: 10,
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
    proceedToPayBtn: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    proceedToPayBtnTxt: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10,
        color: '#fff',
        // textShadowOffset: 5,
    }


})

