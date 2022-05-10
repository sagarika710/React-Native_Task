import {
    View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity,
    TextInput
} from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");
export default function Doctorappoitmentdetails() {

    const navigation = useNavigation();
    //data for map
    const MedicinPriceData =
        [
            {
                "bouns": "TotalMRP",
                "price": "₹1240.00",
            },
            {
                "bouns": "TotalDiscount",
                "price": "₹240.00",
            },
            {
                "bouns": "GST",
                "price": "₹40.00",
            },
            {
                "bouns": "ShippingFee",
                "price": "Free",

            },

        ]

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
            {/* start order details*/}
            <ScrollView >
                <View style={[styles.cardOrderInnerContainer, { alignItems: "center" }]}>
                    <Text style={{ color: "#009987", fontSize: 12, letterSpacing: .95 }}>MRN NUMBER : CKARE12345ABCD#123</Text>
                </View>
                < View style={styles.cardOrderInnerContainer}>

                    <View style={styles.textInputContainer}>
                        <Text style={{
                            fontSize: 12, fontFamily: "Mulish", lineHeight: 15.06, letterSpacing: 0.2, textTransform: "capitalize", color: "#222222", marginLeft: 4
                        }}>Appointment detailes</Text>
                        <TextInput style={styles.textInput
                        }
                            underlineColorAndroid={"transparent"}
                        />

                    </View>
                    <View style={styles.TextInputContainer}>
                        <Text style={{ fontSize: 10, fontFamily: "Mulish" }}>SAGARIKA MOHANTY (F - 37)</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Mulish", marginTop: 20 }}>sagarika@gmail.com</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Mulish", marginVertical: 5 }} >7894562371</Text>
                    </View>
                    < View style={styles.TextInputContainer}>
                        <Text style={{ fontSize: 12, fontFamily: "Mulish", }}>
                            Address : Nandan Vihar, Patia, Bhubaneswar, 751024
                        </Text>
                        <Text style={{ fontSize: 12 }}>

                            Time :  26 Feb 2022 | 10.00 - 11.00 PM
                        </Text>



                    </View>
                    {/* map start */}
                    {/* map end */}
                    {/* coupn start */}
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.textInput}

                            underlineColorAndroid={"transparent"}
                        />

                    </View>
                    {/* coupn end */}
                    <View style={{ marginTop: -40, marginBottom: 10, marginLeft: 4 }}>
                        <Text style={styles.paymentInnerText}>Payment Summary</Text>

                    </View>
                    {/* map start */}
                    <View>
                        {
                            MedicinPriceData.map((list, index) => {
                                return (
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} key={index}>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 7, marginLeft: 4, marginHorizontal: -20, width: "70%" }}>
                                            <Text style={[styles.textField, {
                                                width: "75%"
                                            }]}>{list.bouns}</Text>
                                            <View style={{ width: "25%", }}>
                                                <Text style={[styles.textField, { color: list.price == "Free" ? "#00E0C5" : "#717171" }]}>{list.price}</Text>
                                            </View>

                                        </View>


                                    </View>



                                );
                            })
                        }



                    </View>
                    <View style={[styles.textInputContainer, { marginTop: -40 }]}>
                        <TextInput style={styles.textInput
                        }
                            underlineColorAndroid={"transparent"}
                        />
                    </View>
                    <View style={styles.textInputContainer3}>

                        <Text style={styles.couponText}>Grand Total
                        </Text>
                        <Text style={[styles.couponText, { color: "black" }]}>
                            ₹ 1040.00
                        </Text>

                    </View>

                </View>
                <View style={styles.cardOrderInnerContainer}>
                    <View style={{ flex: 1, justifyContent: "space-around", flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assests/3.png")} style={{ borderRadius: 45, height: 90, width: 90 }} />
                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            <Text style={{
                                color: "gray", fontSize: 20, marginBottom: 5
                            }}>Dr. Klimisch J</Text>
                            <Text style={{ fontSize: 12 }}>Surgeon</Text>
                            <View style={{
                                flexDirection: "row", marginVertical: 10, alignItems: "center"
                            }}>
                                <FontAwesome5Icons name="star" color={"gold"} />
                                <Text style={{ fontSize: 10 }}> 4.5 (135 reviews)</Text>

                            </View>

                        </View>

                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: "#00E0C5", padding: 15, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 40 }}>
                        <Text style={{ color: "#ffff" }}>Thank You</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
            {/* end order details */}

        </View >
    )
}
const styles = StyleSheet.create({
    orderContainer:
    {
        flex: 1,
        backgroundColor: "#fff"
    },
    cardOrderInnerContainer:
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
    TextInputContainer:
    {
        //flexDirection: "row",
        //alignItems: "center",
        borderBottomColor: "#DFDDDD",
        borderBottomWidth: 0.9,
        marginVertical: 7,
        marginHorizontal: 10,
    },

    textInputContainer:
    {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#DFDDDD",
        borderBottomWidth: 0.9,
        marginVertical: 7,
        marginHorizontal: 10,
    },
    textInputContainer1:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#DFDDDD",
        borderTopColor: "#DFDDDD",
        borderBottomWidth: 0.9,
        borderTopWidth: 0.9,
        marginTop: 1,
        marginHorizontal: 10,
        paddingVertical: 20
    },
    textInputContainer3:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: -10,
        marginHorizontal: 10,
        paddingVertical: 20
    },


    textInputField:
    {
        flex: 1
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        // marginVertical: 10,
        // marginHorizontal: 15,

    },
    textField:
    {
        fontSize: 12,
        fontFamily: "Mulish",
        lineHeight: 15.06,
        letterSpacing: 0.4,
        fontWeight: "bold"
    },
    couponText:
    {
        fontSize: 12, fontFamily: "Mulish", lineHeight: 15.06,
        letterSpacing: 0.2, marginLeft: 8,
        fontWeight: "bold"
    },
    paymentText:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginLeft: 10
    },
    paymentInnerText:
    {
        fontSize: 12, fontFamily: "Mulish", lineHeight: 15.06, letterSpacing: 0.2, color: "#222222", marginLeft: 8

    }

})