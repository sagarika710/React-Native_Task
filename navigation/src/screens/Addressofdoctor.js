import {
    View, Text, TextInput, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList
} from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");
export default function Changeaddress() {

    const navigation = useNavigation();
    return (
        // start here
        <View style={styles.clinicContainer}>
            <View style={{ marginVertical: 10, flexDirection: "row", alignItems: "center", marginHorizontal: 12 }}>
                <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#EFF3FA" }} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 8, fontFamily: "Mulish", letterSpacing: 0.3, fontSize: 20 }}>Add New Adress</Text>
            </View>
            <ScrollView>
                <View >
                    <Image style={{
                        width: "95%", height: 170, marginHorizontal: 9, marginVertical: 10,
                        borderRadius: 10,
                    }}
                        source={require("../assests/location.png")}
                        resizeMode={"cover"} />
                </View>
                <View style={{ marginHorizontal: 12, marginVertical: 5 }}>
                    <Text>Full Name</Text>
                </View>
                <View style={styles.inputBoxContainer}>
                    {/* look here first one is icon then input box and then again icon */}
                    <TextInput style={{ fontFamily: "Mulish" }} placeholder='Sagarika Mohanty'></TextInput>
                </View>
                <View style={{ marginHorizontal: 12, marginVertical: 2 }}>
                    <Text>Address</Text>
                </View>
                <View style={[styles.inputBoxContainer, { height: 100 }]}>
                    {/* look here first one is icon then input box and then again icon */}
                    <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                </View>
                <View style={{ marginHorizontal: 12, marginVertical: 2 }}>
                    <Text>District</Text>
                </View>

                <View style={styles.inputBoxContainer}>
                    {/* look here first one is icon then input box and then again icon */}
                    <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginHorizontal: 12, marginVertical: 2, width: "45%" }}>
                        <Text>State</Text>
                        <View style={styles.inputBoxContainer1}>
                            {/* look here first one is icon then input box and then again icon */}
                            <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                        </View>

                    </View>

                    <View style={{ marginHorizontal: 12, marginVertical: 2, width: "45%" }}>
                        <Text>Pincode</Text>
                        <View style={styles.inputBoxContainer1}>
                            {/* look here first one is icon then input box and then again icon */}
                            <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                        </View>

                    </View>
                </View>
                <View style={{ marginHorizontal: 12, marginVertical: 2 }}>
                    <Text>Phone Number</Text>
                </View>

                <View style={styles.inputBoxContainer}>
                    {/* look here first one is icon then input box and then again icon */}
                    <TextInput style={{ fontFamily: "Mulish" }}></TextInput>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity style={styles.appointmentBtn}>
                        <Text style={{ color: "white" }}>Take a Appointment</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        </View >
        // end here
    )
}
const styles = StyleSheet.create({
    clinicContainer:
    {
        flex: 1,
        backgroundColor: "#fff"
    },
    inputBoxContainer: {
        marginHorizontal: 12,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 0.1,
        backgroundColor: "#fff",
        borderRadius: 2,



    },
    inputBoxContainer1: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 0.1,
        backgroundColor: "#fff",
        borderRadius: 2,

    },
    addressContainer:
    {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 0.9,
        borderColor: "gray",
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 150
    },
    appointmentBtn:
    {
        backgroundColor: "#00E0C5", padding: 15, justifyContent: "center", alignItems: "center", borderRadius: 40, marginHorizontal: 10
    },


})