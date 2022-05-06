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
                <Text style={{ marginLeft: 8, fontFamily: "Mulish", letterSpacing: 0.3, fontSize: 20 }}>Select Address</Text>
            </View>
            {/* search bar view start */}
            <View >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Addressofdoctor", {

                    })
                }}
                    style={styles.searchBoxContainer}>
                    {/* look here first one is icon then input box and then again icon */}
                    <TextInput>
                        <Text style={{ color: "#009987" }}>Add New Address</Text>
                    </TextInput>
                </TouchableOpacity>
            </View>
            <View style={styles.addressContainer}>
                {/* look here first one is icon then input box and then again icon */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 12 }}>
                    <Text>Sagarika Mohanty</Text>
                    <TouchableOpacity style={{ backgroundColor: "#C4C4C4", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5 }}>
                        <Text style={{ fontSize: 10 }}>Home</Text>
                    </TouchableOpacity>
                    <Ionicons name="ellipsis-vertical-outline" />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 12 }}>Nandan Vihar, Patia, Bhubaneswar,
                        Odisha - 751024</Text>

                </View>
                <View>
                    <Text style={{ fontSize: 12 }}>+91 7896541237</Text>
                </View>

            </View>

            {/* search bar view end */}
            {/*  */}


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
    searchBoxContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderWidth: 0.9,
        borderColor: "#009987",
        backgroundColor: "#fff",
        borderRadius: 10,



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
    }

})