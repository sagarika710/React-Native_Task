import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
//import iconButton from 'react-native-vector-icons/dist/lib/icon-button'
// this is our main package now we only need fontawsome so just use like this
// now give name here what ever you like give name...
export default function resturant() {

    const firstContainerData = [
        {
            "title": "Oberal Bakery & Cafe",
            "time": "33min.2km",
            "rating": "4.0 ",
            "discountText": "60% off upto ₹ rupess",
            "image": require("../Assets/1.jpg")
        },
        {
            "title": "Chandini Food Magic",
            "time": "33min.2km",
            "rating": "4.0 ",
            "discountText": "60% off upto ₹ rupess",
            "image": require("../Assets/2.jpg")
        },
        {
            "title": "Biriyani247 spicy12345",
            "time": "33min.2km",
            "rating": "4.0 ",
            "discountText": "60% off upto ₹ rupess",
            "image": require("../Assets/3.jpg")
        },
    ]
    return (
        <View style={styles.container}>
            {/* search bar view start */}
            <View style={styles.searchBoxContainer}>
                {/* look here first one is icon then input box and then again icon */}
                <FontAwesomeIcon color={"#FF7E8B"} size={20} name="search" />
                <TextInput style={{ marginRight: "auto", marginLeft: 5 }} placeholder='Resturant name or dish...'></TextInput>
                <View style={{ borderRightWidth: 2, height: "80%", marginRight: 10, borderColor: "gray", opacity: 0.6 }}></View>
                <FontAwesomeIcon color={"#FF7E8B"} size={20} name="microphone" />
            </View>
            {/* search bar view end */}

            {/* category badge start*/}
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.badgeContainer} horizontal={true}>
                    <TouchableOpacity style={styles.badgeBtn}>
                        <Text style={styles.badgeText}>fast delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.badgeBtn}>

                        <Text style={styles.badgeText}><FontAwesomeIcon color={"blue"} name="percent" /> great offers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.badgeBtn}>
                        <Text style={styles.badgeText}>Rating 4.0+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.badgeBtn}>
                        <Text style={styles.badgeText}>new arrivals</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* category badge end*/}
            {/* offerbutton start */}
            <View style={styles.offerContainer}>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.offerContainer} horizontal={true}>

                    <TouchableOpacity style={styles.offerbtn}>
                        <Text style={styles.offerText}>20% off up to <FontAwesomeIcon color={"blue"} name="rupee" />100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.offerbtn}>
                        <Text style={styles.offerText}>20% off up to <FontAwesomeIcon color={"blue"} name="rupee" />100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.offerbtn}>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* offerbutton end */}
            <ScrollView>
                {/* for header start*/}
                <View style={styles.header}>
                    <Text style={styles.heading}>must-try paneer curry</Text>
                    <Text style={styles.para}>see all</Text>
                </View>
                {/*for header end */}

                {/* scroll food items start */}
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.cardContainer} horizontal={true}>
                    {firstContainerData.map((value, index) => {
                        return (
                            <View style={styles.card} key={index}>

                                {/*  */}

                                <View style={{
                                    position: "absolute", left: -10,
                                    top: 10, zIndex: 1, backgroundColor: "red"
                                }}>
                                    <Text style={{ color: "white" }}>Pro</Text>
                                </View>

                                <View style={{ position: "absolute", right: 10, top: 10, zIndex: 1, backgroundColor: "white", height: 25, width: 25, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                                    <FontAwesomeIcon name='heart' />
                                </View>

                                {/*  */}

                                <Image source={value.image} style={styles.cardImage} resizeMode={"cover"} />
                                <View style={styles.cardInnerContainer}>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ width: "70%", }}>
                                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>{value.title}</Text>

                                            <Text style={{ fontSize: 10 }}>{value.time}</Text>
                                            <Text style={{ fontSize: 10 }}>100 for one</Text>
                                        </View>

                                        <View style={{ padding: 3 }}>
                                            <Text style={{ color: "white", padding: 2, fontSize: 10, borderRadius: 5, backgroundColor: "green" }}>4.0 <FontAwesomeIcon name="star" /></Text>
                                        </View>


                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: "red", borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                                    width: "100%",
                                    alignItems: "center"
                                }}>
                                    <Text style={{ color: "white", fontSize: 10 }}>{value.discountText}</Text>
                                </View>

                            </View>
                        );
                    })}


                </ScrollView>

                {/* scroll food items end */}

                {/*  */}
            </ScrollView>
        </View>
    )
}
// 

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10

    },
    badgeContainer:
    {
        padding: 5,

    },
    badgeBtn:
    {
        borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        borderColor: "gray",


    },
    badgeText:
    {
        fontWeight: "600",
        textTransform: "capitalize",

    },
    offerContainer:
    {
        padding: 2
    },
    offerbtn:
    {
        borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 30,
        borderColor: "gray",
        width: 160

    },
    offerText:
    {
        fontSize: 10,
        letterSpacing: 2,
        color: "blue"
    },
    header:
    {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    heading:
    {
        padding: 5,
        fontWeight: "500",
        fontSize: 20,
        textTransform: "capitalize",
    },
    para:
    {
        color: "red"
    },
    card:
    {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 10,
        marginBottom: 3,
        width: "30%",
        position: "relative"
    },
    cardContainer: {
        padding: 7
    },
    cardInnerContainer: {
        paddingHorizontal: 5,
        paddingBottom: 10,
    },
    cardImage: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})


