import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get("screen");
export default function Screen3() {

    const navigation = useNavigation();
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
        </View >
    )
}
const styles = StyleSheet.create({
    orderContainer:
    {
        flex: 1
    },

})