import {
    View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity,
    TextInput
} from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");
export default function MyOrders() {
    const [activeService, setActiveService] = React.useState("call")

    const navigation = useNavigation();
    //data for map
    const MedicinOrderData =
        [
            {
                "mediciname": "MontecLC500MG",
                "medicinquantity": "x2",
                "price": "₹ 40.00",
            },
            {
                "mediciname": "Paracetomal",
                "medicinquantity": "x10",
                "price": "₹100.00",
            },
            {
                "mediciname": "Dolo-650",
                "medicinquantity": "x5",
                "price": "₹540.00",
            },
            {
                "mediciname": "Glucose-D",
                "medicinquantity": "x4",
                "price": "₹450.00",
            },

        ]
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

                < View style={styles.cardOrderInnerContainer}>

                    <View style={styles.textInputContainer}>
                        <Text style={{
                            fontSize: 12, fontFamily: "Mulish", lineHeight: 15.06, letterSpacing: 0.2, textTransform: "capitalize", color: "#222222", marginLeft: 4
                        }}>Order detailes</Text>
                        <TextInput style={styles.textInput
                        }
                            underlineColorAndroid={"transparent"}
                        />
                    </View>
                    {/* map start */}
                    <View>
                        {
                            MedicinOrderData.map((list, index) => {
                                return (
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} key={index}>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 5, marginLeft: 4 }}>
                                            <View style={{ width: "50%" }}>
                                                <Text style={styles.textField}>{list.mediciname}</Text>
                                            </View>
                                            <View style={{ width: "10%" }}>
                                                <Text style={styles.textField}>{list.medicinquantity}</Text>
                                            </View>

                                            <View style={{ width: "20%" }}>
                                                <Text style={styles.textField}>{list.price}</Text>
                                            </View>
                                        </View>

                                        {/* <View style={{ marginLeft: 60, marginRight: 10, justifyContent: "flex-start" }}>
                            <Text style={styles.textField}>{list.price}</Text>
                        </View> */}

                                    </View>



                                );
                            })
                        }



                    </View>
                    {/* map end */}
                    {/* coupn start */}
                    <View style={styles.textInputContainer1}>
                        < TouchableOpacity onPress={() => {
                            navigation.navigate("CoupnsField", {

                            })
                        }}>
                            <View >
                                <Text style={styles.couponText}>Use coupons
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[styles.couponText, { color: "#009987" }]}>
                            Apply
                        </Text>

                    </View>
                    <View>
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
                                                <Text style={[styles.textField, { color: list.price == "Free" ? "#00E0C5" : "gray" }]}>{list.price}</Text>
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
                    <View >
                        <Text style={{
                            fontSize: 12, fontFamily: "Mulish", lineHeight: 15.06, letterSpacing: 0.2, textTransform: "capitalize", color: "#222222", marginLeft: 8
                        }}>Payment Methods</Text>
                    </View>
                    <View style={[{ marginBottom: 10, padding: 3, }, activeService == "call" ? styles.activeService : null]}>
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginTop: 10 }}
                            onPress={() => setActiveService("call")}>
                            <View >
                                <FontAwesome5Icons name="credit-card" size={20} color={"green"} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, fontFamily: "Mulish" }}>Online</Text>
                            </View>
                            <View>
                                <Text></Text>
                            </View>
                            <View >
                                <Ionicons name="checkmark-circle" color={"green"} size={20} />
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={[{ marginBottom: 10, padding: 3, borderWidth: .2 }, activeService == "cash" ? styles.activeService : null]}>
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginTop: 10 }}
                            onPress={() => setActiveService("cash")}>
                            <View >
                                <Ionicons name="cash" color={"green"} size={20} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, fontFamily: "Mulish" }}> Cash</Text>
                            </View>
                            <View>
                                <Text></Text>
                            </View>
                            <View >
                            </View>

                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: "#00E0C5", padding: 15, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 40 }}>
                        <Text style={{ color: "#ffff" }}>Proceed To Pay</Text>
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
    activeService: {
        borderColor: "#00E0C5", borderRadius: 5, borderWidth: 1,
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