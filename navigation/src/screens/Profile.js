import { View, Text, Image, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

export default function Profile() {

    const navigation = useNavigation();

    return (
        <View style={styles.ProfileContainer}>
            <ScrollView >

                <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#EFF3FA" }} onPress={() => {
                        navigation.goBack()
                    }} >
                        <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{
                            height: 90, width: 90,
                            alignItems: "center", justifyContent: "center",
                            borderRadius: 45
                        }}>
                            <Image style={{
                                height: 92.74, width: "100%",
                                borderRadius: 70,
                                backgroundColor: "#01e0c5",

                            }}
                                source={require("../assests/image2.png")}
                                resizeMode={"cover"}
                            />
                        </View>
                        <View>
                            <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, lineHeight: 25.1, textTransform: "capitalize" }}>Dr Kate Rose</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: "center", marginTop: 5, fontSize: 14, color: "#01e0c5", textTransform: "capitalize", letterSpacing: 1 }}>pediatrician</Text>
                        </View>
                    </View>
                </View>
                {/* start here for  */}
                <View style={styles.CardContainer}>
                    <View style={styles.innerCardContainer}>
                        <View style={styles.detailsCardContainer}>
                            <Ionicons name="people-outline" color="#7ACEFA" size={30} />
                        </View>
                        <Text style={{ fontSize: 17 }}>1000+</Text>
                        <Text style={{ fontSize: 12 }}>Patients</Text>
                    </View>
                    {/*  */}
                    <View style={styles.innerCardContainer}>
                        <View style={styles.detailsCardContainer2}>
                            <Ionicons name="ribbon-outline" color="#C7E80040" size={30} />
                        </View>
                        <Text style={{ fontSize: 17 }}>10Yrs</Text>
                        <Text style={{ fontSize: 12 }}>Experience</Text>
                    </View>
                    {/*  */}
                    <View style={styles.innerCardContainer}>
                        <View style={styles.detailsCardContainer1}>
                            <Ionicons name="star-outline" color="#F9BC0B63" size={30} />
                        </View>
                        <Text style={{ fontSize: 17 }}>4.5</Text>
                        <Text style={{ fontSize: 12 }}>Ratings</Text>
                    </View>
                </View>


                {/*  */}
                {/* AboutDoctor */}
                <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish", letterSpacing: 0.3 }}>About Doctor</Text>
                    <View style={{ marginTop: 10 }}>

                        <Text style={{ fontSize: 12, lineHeight: 15, letterSpacing: .3 }}>
                            Dr. Kate Rose is a top specialist at Delhi AIIMS Hospital. She has achieved several awards and recognition for is contribution and service in her own field. She is available for private consultation.
                        </Text>
                    </View>

                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish" }}>Work Time</Text>
                    <Text style={{ fontSize: 12, fontFamily: "Mulish", letterSpacing: 0.2, lineHeight: 20, fontStyle: "normal" }}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
                </View>
                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish" }}>Services</Text>
                    <View style={{ marginBottom: 10, borderWidth: 1, padding: 3, borderColor: "#00E0C5", borderRadius: 5 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View style={[styles.servicesIconContainer, { backgroundColor: "#7ACEFA26", borderColor: "#7ACEFA", }]}>
                                <Ionicons name="call" color="#7ACEFA" size={30} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: "Mulish" }}>Call a doctor at home</Text>
                                <Text style={{ fontSize: 10 }}>Get diagnosed in the comfort of your Home</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10, padding: 3, borderColor: "#7ACEFA", borderRadius: 5 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}


                        >
                            <View style={[styles.servicesIconContainer, { backgroundColor: "#C7E8004F", borderColor: "#C7E8004F", }]}>
                                <FontAwesome5Icons name="calendar" color="#C7E8004F" size={30} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: "Mulish" }}>Call a doctor at home</Text>
                                <Text style={{ fontSize: 10 }}>Get diagnosed in the comfort of your Home</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3, borderColor: "#FBBC05", borderRadius: 5 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View style={[styles.servicesIconContainer, { backgroundColor: "#FBBC05", borderColor: "#7ACEFA", }]}>
                                <Ionicons name="videocam-outline" size={30} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: "Mulish" }}>Call a doctor at home</Text>
                                <Text style={{ fontSize: 10 }}>Get diagnosed in the comfort of your Home</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Appointment", {

                            })
                        }} style={styles.appointmentBtn}>
                            <Text style={{ color: "white" }}>Take a Appointment</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView >

        </View >
    )
}
const styles = StyleSheet.create({
    ProfileContainer:
    {
        flex: 1,
        backgroundColor: "#fff"
    },
    CardContainer: {
        flexDirection: "row",
        backgroundColor: "#F4F4F5",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4,
        marginVertical: 5

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
        backgroundColor: "#7ACEFA26",
        height: 63, width: 49,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 5
    },
    detailsCardContainer1: {
        backgroundColor: "#F9BC0B63",
        height: 63, width: 49,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 5
    },
    detailsCardContainer2: {
        backgroundColor: "#C7E80040",
        height: 63, width: 49,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 5
    },
    appointmentBtn:
    {
        backgroundColor: "#00E0C5", padding: 15, justifyContent: "center", alignItems: "center", borderRadius: 40
    },
    servicesIconContainer: { width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 10, marginRight: 5 }
})
