import { View, Text, Image, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

export default function Profile() {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.ProfileContainer}>
            <View style={{}}>
                <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "white", }} onPress={() => {
                        navigation.goBack()
                    }} >
                        <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{
                            height: 110, width: 110,
                            alignItems: "center", justifyContent: "center",
                            borderRadius: 70
                        }}>
                            <Image style={{
                                height: 92.74, width: 100,
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
                        <Text>1000+</Text>
                        <Text>Patients</Text>
                    </View>
                    {/*  */}
                    <View style={styles.innerCardContainer}>
                        <View style={styles.detailsCardContainer}>
                            <Ionicons name="user-friends" color="#7ACEFA" size={30} />
                        </View>
                        <Text>1000+</Text>
                        <Text>Patients</Text>
                    </View>
                    {/*  */}
                    <View style={styles.innerCardContainer}>
                        <View style={styles.detailsCardContainer}>
                            <Ionicons name="user-friends" color="#7ACEFA" size={30} />
                        </View>
                        <Text>1000+</Text>
                        <Text>Patients</Text>
                    </View>
                </View>
            </View>

            {/*  */}
            {/* AboutDoctor */}
            <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: "Mulish" }}>About Doctor</Text>
                <Text>
                    Dr. Kate Rose is a top specialist at Delhi AIIMS Hospital. She has achieved several awards and recognition for is contribution and service in her own field. She is available for private consultation.
                </Text>
            </View>
            <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: "Mulish" }}>Work Time</Text>
                <Text>Mon - Sat (08:30 AM - 09:00 PM)</Text>
            </View>
            <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: "Mulish" }}>Services</Text>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#7ACEFA26" }}>
                        <Ionicons name="call" color="#7ACEFA" size={30} />
                    </View>
                    <View>
                        <Text>Call a doctor at home</Text>
                        <Text>Get diagnosed in the comfort. of your home.</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ProfileContainer:
    {
        flex: 1
    },
    CardContainer: {
        flexDirection: "row",
        backgroundColor: "#F4F4F5",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
        backgroundColor: "#7ACEFA26",
        height: 63, width: 49,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 5
    }
})
