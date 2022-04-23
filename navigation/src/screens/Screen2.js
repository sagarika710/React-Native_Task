import { View, Text, Image, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"

//
import CardComponent from '../components/CardComponent';

const { height, width } = Dimensions.get("screen");
export default function Screen2() {

    const navigation = useNavigation();


    const infoDoctorData =
        [
            {
                "title": "Dr.Bellamy N",
                "specialist": "Viralogist",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage1.jpg"),
                "isonline": true
            },
            {
                "title": "Dr Mensah T",
                "specialist": "Oncologists",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage2.jpg"),
                "isonline": false
            },
            {
                "title": "Dr Klimisch j",
                "specialist": "Surgon",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage3.jpg"),
                "isonline": false
            },
            {
                "title": "Dr Martinez K",
                "specialist": "Pediatrician",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage4.jpg"),
                "isonline": true
            },
            {
                "title": "Dr.Marc M",
                "specialist": "Rheumatologists",
                "rating": "4.3",
                "reviews": "(130 reviews)",
                "image": require("../assests/doctorimage5.jpg"),
                "isonline": true
            },
            {
                "title": "Dr.O'Boyle J",
                "specialist": "Radiologists",
                "rating": "4.5",
                "reviews": "(135 reviews)",
                "image": require("../assests/doctorimage6.jpg"),
                "isonline": false
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
            {/* <ScrollView style={{ backgroundColor: "blue", }}>
                {
                    infoDoctorData.map((list, index) => {
                        return (
                            <View key={index} style={styles.cardContainer}>
                                <View style={styles.cardInnerContainer}>
                                    <View style={styles.cardImageContainer}>
                                        <View></View>
                                        <Image source={list.image} />
                                    </View>

                                    <Text>Dr.</Text>
                                    <Text>Vvv</Text>
                                    <Text>
                                        <FontAwesome5Icons name='star' />
                                        4.5 (135 reviews)
                                    </Text>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView> */}

            <FlatList

                numColumns={2} data={infoDoctorData} renderItem={({ item }) => {
                    return (
                        <CardComponent data={item} />
                    );
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    doctorContainer:
    {
        flex: 1,
    },
    cardContainer: {

    },
    cardImageContainer: {
        position: "relative",
        marginTop: 10
    },
    cardOnlineLabel:
    {
        height: 15, width: 15,
        backgroundColor: "green",
        borderRadius: 50,
        position: "absolute",
        top: 8, right: 5,
        zIndex: 1
    },
    cardInnerContainer:
    {
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
        width: width / 2.3,
        justifyContent: "center",
        alignItems: "center",
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