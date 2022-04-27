import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'


const Patholabs = () => {
    const { height, width } = Dimensions.get("screen");
    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1 }}>

            <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "white", }} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}></Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Image style={{
                    width: 350, height: 170, marginTop: 10, marginLeft: 5, marginRight: 10,
                    borderRadius: 10,
                }}
                    source={require("../assests/clinic2.png")}
                    resizeMode={"cover"} />
            </View>
            <View style={{ marginTop: 20, marginLeft: 10, }}>
                <Text style={{ fontSize: 18, fontWeight: "800", fontFamily: "Mulish", letterSpacing: 1, color: "#009987", textTransform: "capitalize" }}>Homopathetic Clinic</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 10, fontFamily: "Mulish" }}>Nandan Bihar , Patia, Bhubaneswar,</Text>
                    <Text style={{ fontSize: 10, fontFamily: "Mulish" }}>Pincode:751024</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 10 }}>
                            <FontAwesomeIcon name='star' size={10} color={"gold"} />4.5
                        </Text>
                        <Text style={{ fontSize: 10 }}>(135 reviews)</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish", letterSpacing: 0.3 }}>Description</Text>

                </View>
                <Text style={{ fontSize: 12, lineHeight: 20, letterSpacing: 0.3 }} >
                    Dr. Kate Rose is a top specialist at Delhi AIIMS Hospital. She has achieved several awards and recognition for is contribution and service in her own field. She is available for private consultation.
                </Text>
            </View>

            <View style={{ marginTop: 20, paddingHorizontal: 10 }} >
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish", letterSpacing: 0.3 }}>Doctors Available</Text>
                </View>

            </View>
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.cardContainer} horizontal={true}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Doctors", {

                        })
                    }} >
                        <View style={styles.CardContainer}>
                            <View style={styles.innerCardContainer}>
                                <View style={styles.detailsCardContainer}>
                                    <Image source={require('../assests/image2.png')} resizeMode={"stretch"} />
                                </View>
                                <Text style={{ fontSize: 10 }}>Dr Kate Rose</Text>
                                <Text style={{ fontSize: 10 }}>pediatrician</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />

                                </View>
                            </View>
                            {/*  */}
                            <View style={styles.innerCardContainer}>
                                <View style={styles.detailsCardContainer}>
                                    <Image source={require('../assests/image3.png')} resizeMode={"stretch"} />
                                </View>
                                <Text style={{ fontSize: 10 }}>Dr Kate Rose</Text>
                                <Text style={{ fontSize: 10 }}>pediatrician</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />

                                </View>
                            </View>
                            <View style={styles.innerCardContainer}>
                                <View style={styles.detailsCardContainer}>
                                    <Image source={require('../assests/image2.png')} resizeMode={"stretch"} />
                                </View>
                                <Text style={{ fontSize: 10 }}>Dr Kate Rose</Text>
                                <Text style={{ fontSize: 10 }}>pediatrician</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />
                                    <FontAwesomeIcon name="star" color="gold" />

                                </View>
                            </View>


                        </View>
                    </TouchableOpacity>
                    {/* end */}

                </ScrollView>

            </View>



        </ScrollView>
    )
}

export default Patholabs

const styles = StyleSheet.create({

    CardContainer: {
        flexDirection: "row",
        backgroundColor: "#F4F4F5",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",



    },
    CardContainer: {
        flexDirection: "row",
        backgroundColor: "#F4F4F5",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",

    },
    innerCardContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,

    },
    detailsCardContainer: {
        backgroundColor: "#009987",
        height: 120, width: 120,
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 20,
        //borderBottomLeftRadius: 20,
        paddingVertical: 5
    },

})