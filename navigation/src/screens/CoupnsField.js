import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Unorderedlist from 'react-native-unordered-list';
const { height, width } = Dimensions.get("screen");
export default function Screen3() {

    const navigation = useNavigation();
    return (
        <View style={styles.orderContainer}>
            <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                <TouchableOpacity style={{
                    height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#EFF3FA"
                }} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}></Text>
            </View>
            {/* search bar view start */}
            <View style={styles.searchBoxContainer}>
                {/* look here first one is icon then input box and then again icon */}
                <TextInput style={{ marginRight: "auto", marginLeft: 5, fontFamily: "Mulish" }} placeholder='Enter Coupnon Code'></TextInput>
                <Text style={[styles.couponText, { color: "#009987" }]}>
                    Apply
                </Text>

            </View>
            {/* search bar view end */}
            < ScrollView>
                <View>
                    <Text style={styles.couponText1}>Available Coupons</Text>
                </View>

                <View style={styles.couponOrderInnerContainer}>
                    <View>
                        <Text style={{
                            fontSize: 20, marginLeft: 12, fontFamily: "Mulish",
                            fontWeight: "bold", lineHeight: 25.1, letterSpacing: 0.9
                        }}>CKare</Text>
                        <Text style={{
                            fontSize: 12, marginLeft: 12, fontFamily: "Mulish",
                            fontWeight: "bold", lineHeight: 25.1, letterSpacing: 0.9,
                        }}>Flat 20% OFF</Text>
                        <Text style={{
                            fontSize: 11, marginLeft: 12, fontFamily: "Mulish", lineHeight: 12, letterSpacing: 0.1,
                        }}>Valid on total value of items worth ₹550 or more.</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TouchableOpacity style={{ backgroundColor: "#00E0C5", paddingVertical: 10, paddingHorizontal: 40, marginBottom: 10, marginTop: 10, borderRadius: 25, borderStyle: "dashed", borderColor: "#00E0C5", borderWidth: 2 }}>
                            <Text style={{ color: " Black" }}>SAVEMORE</Text>
                        </TouchableOpacity>
                        <Text style={{ color: "#009987" }}>Applied</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>

                        <Unorderedlist bulletUnicode={0x2022}><Text style={{ fontSize: 12 }}> Applicable only on select medicine store.</Text></Unorderedlist>

                        <Unorderedlist bulletUnicode={0x2022}><Text style={{ fontSize: 12 }}> Applicable maximum 3 times in a day.</Text></Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2022}><Text style={{ fontSize: 12 }}> Other T&Cs may apply.</Text></Unorderedlist>
                    </View>

                </View >
                <View style={styles.couponOrderInnerContainer}>
                    <View>
                        <Text style={{
                            fontSize: 20, marginLeft: 12, fontFamily: "Mulish",
                            fontWeight: "bold", lineHeight: 25.1, letterSpacing: 0.9
                        }}>CKare</Text>
                        <Text style={{
                            fontSize: 12, marginLeft: 12, fontFamily: "Mulish",
                            fontWeight: "bold", lineHeight: 25.1, letterSpacing: 0.9,
                        }}>Flat 20% OFF</Text>
                        <Text style={{
                            fontSize: 11, marginLeft: 12, fontFamily: "Mulish", lineHeight: 12, letterSpacing: 0.1,
                        }}>Valid on total value of items worth ₹550 or more.</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TouchableOpacity style={{ backgroundColor: "#00E0C5", paddingVertical: 10, paddingHorizontal: 40, marginBottom: 10, marginTop: 10, borderRadius: 25, borderStyle: "dashed", borderColor: "#00E0C5", borderWidth: 2 }}>
                            <Text style={{ color: " Black" }}>TRYNOW</Text>
                        </TouchableOpacity>
                        <Text>Applied</Text>
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Unorderedlist bulletUnicode={0x2022} color='#00E0C5' style={{ fontSize: 15 }}><Text style={{ fontSize: 12 }}> Applicable only on select medicine store.</Text></Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2022} color='#00E0C5' style={{ fontSize: 15 }}><Text style={{ fontSize: 12 }}> Applicable maximum 3 times in a day.</Text></Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2022} color='#00E0C5' style={{ fontSize: 15 }}><Text style={{ fontSize: 12 }}> Other T&Cs may apply.</Text></Unorderedlist>
                    </View>

                </View>

            </ScrollView >

        </View >
    )
}
const styles = StyleSheet.create({
    orderContainer:
    {
        flex: 1
    },
    searchBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderColor: "gray",
        backgroundColor: "#EFF3FA",
        borderRadius: 10,


    },
    couponText:
    {
        fontSize: 12,
        fontFamily: "Mulish",
        lineHeight: 15.06,
        letterSpacing: 0.9,
        marginLeft: 20,
        //marginTop: 5,
        fontWeight: "bold"
    },
    couponText1:
    {
        fontSize: 12,
        fontFamily: "Mulish",
        lineHeight: 15.06,
        letterSpacing: 0.9,
        marginLeft: 20,
        marginTop: 15,
        fontWeight: "bold"
    },
    couponOrderInnerContainer:
    {
        backgroundColor: "white",
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,

        //width: width / 2.3,
        //alignItems: "center",
        //justifyContent: "center",
        // 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textInputContainer:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#DFDDDD",
        borderBottomWidth: 0.9,
        marginVertical: 7,
        marginHorizontal: 10,
    },
    saveButton:
    {
        backgroundColor: "#00E0C5"
    }

})