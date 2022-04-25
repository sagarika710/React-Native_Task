import { View, Text, Image, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"

export default function Profile() {

    const navigation = useNavigation();


    return (
        <View style={styles.ProfileContainer}>
            <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "grey", }} onPress={() => {
                    navigation.goBack()
                }} >
                    <FontAwesome5Icons name="caret-left" color={"white"} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginVertical: 20, flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ alignItems: "center" }}>
                    <View style={{
                        height: 140, width: 140, backgroundColor: "lightblue",
                        alignItems: "center", justifyContent: "center",
                        borderRadius: 70
                    }}>
                        <Image style={{
                            width: 120, height: 120,
                            borderRadius: 60
                        }}
                            source={require("../assests/pic1.jpg")}
                            resizeMode={"cover"}
                        />
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, textTransform: "capitalize", letterSpacing: 1 }}>Dr Kate Rose</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", marginTop: 5, fontSize: 15, color: "#01e0c5", textTransform: "capitalize", letterSpacing: 1 }}>pediatrician</Text>
                    </View>
                </View>
            </View>
            {/* start here for  */}
            <View >

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileContainer:
    {
        flex: 1
    }
})
