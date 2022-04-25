import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"

const { height, width } = Dimensions.get("screen");
export default function Screen3() {

    const navigation = useNavigation();

    const infoDoctorData =
        [
            {
                "title": "Dr.Bellamy N",
                "isonline": true,
                "specialist": "Viralogist",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage1.jpg")
            },
            {
                "title": "Dr Mensah T",
                "isonline": false,
                "specialist": "Oncologists",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage2.jpg")
            },
            {
                "title": "Dr Klimisch j",
                "isonline": false,
                "specialist": "Surgon",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage3.jpg")
            },
            {
                "title": "Dr Martinez K",
                "isonline": true,
                "specialist": "Pediatrician",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage4.jpg")
            },
            {
                "title": "Dr.Marc M",
                "isonline": true,
                "specialist": "Rheumatologists",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage5.jpg")
            },
            {
                "title": "Dr.O'Boyle J",
                "isonline": false,
                "specialist": "Radiologists",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage6.jpg")
            }

        ]
    return (
        <View style={styles.doctorContainer}>
            <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "grey", }} onPress={() => {
                    navigation.goBack()
                }} >
                    <FontAwesome5Icons name="caret-left" color={"white"} size={20} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}>Doctors</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginHorizontal: 10 }}>

                <FontAwesome5Icons name="map-pin" size={15} color="blue" />
                <Text style={{ color: "blue", marginLeft: 3 }}>Patia ,Bhubaneswar</Text>

            </View>
            {/* start try map */}
            <ScrollView >
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                    {
                        infoDoctorData.map((list, index) => {
                            return (

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("profile", {

                                    })
                                }} View style={styles.cardInnerContainer} key={index}>
                                    <View style={styles.cardImageContainer}>
                                        {list.isonline ? <View style={styles.cardOnlineLabel} /> : null}
                                        <Image source={list.image} style={{ borderRadius: 50, height: 100, width: 100 }} resizeMode={"contain"} />
                                    </View>

                                    <Text>{list.title}</Text>
                                    <Text>{list.rating}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text>
                                            <FontAwesome5Icons name='star' />
                                            {list.rating}
                                        </Text>
                                        <Text>{list.reviews}</Text>

                                    </View>
                                </TouchableOpacity>

                            );
                        })
                    }
                </View>
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    doctorContainer:
    {
        flex: 1
    },
    cardImageContainer: {
        position: "relative",
        marginTop: 10
    },
    cardOnlineLabel:
    {
        height: 15, width: 15, backgroundColor: "green", borderRadius: 50,
        position: "absolute",
        top: 8, right: 5,
        zIndex: 1
    },
    cardInnerContainer:
    {
        backgroundColor: "white",
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,

        //width: width / 2.3,
        alignItems: "center",
        justifyContent: "center",
        // 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }

})