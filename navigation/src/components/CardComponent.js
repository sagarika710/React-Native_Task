import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

const { height, width } = Dimensions.get("screen");

export default function CardComponent({ data }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardInnerContainer}>
                <View style={styles.cardImageContainer}>
                    {data.isonline ? <View style={styles.cardOnlineLabel} /> : null}
                    <Image source={data.image} style={{ height: 100, width: 100, borderRadius: 50 }} resizeMode={"contain"} />
                </View>

                <Text style={{ fontWeight: "bold", fontFamily: "roboto", marginBottom: 3 }}>{data.title}</Text>
                <Text style={{ fontSize: 12 }}>{data.specialist}</Text>
                <View style={{ flexDirection: "row", aligndatas: "center" }}>
                    <FontAwesome5Icons name='star' />
                    <Text style={{ fontSize: 10 }}>
                        {data.rating}
                    </Text>
                    <Text style={{ fontSize: 10 }}>{data.reviews}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {

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
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
        width: width / 2.3,
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