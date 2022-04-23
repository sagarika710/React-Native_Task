import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function JiodataPack() {
    return (
        <View style={styles.jiocontainer}>


            {/* For header Field */}
            <View style={styles.text}>
                <Text style={styles.text1}>data add-on pack</Text>
                <View style={styles.iconInput}>

                    <FontAwesome5Icon name="caret-up" style={{ color: "white" }} />
                    {/* if there is only one or two then no need ok ok */}
                </View>
            </View>

            <ScrollView style={{ flex: 1 }}>
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* wait first complete single one then copy it */}
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text style={styles.rupess}>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text style={{ fontWeight: "bold", }}>30days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text style={{ fontWeight: "bold" }}>30Gb</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text style={styles.rupess}>₹241</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}

                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}
                {/* for plan fields */}
                <View style={styles.cardContainer}>
                    {/* upper container */}
                    <View style={styles.plan}>
                        {/* inner container */}
                        <View style={{ marginLeft: 10, marginRight: 30 }}>
                            <Text>Plan</Text>
                            <Text>₹181</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Validity</Text>
                            <Text>30 days</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text>Data</Text>
                            <Text>30 GB</Text>
                        </View>

                    </View>
                    {/* bottom container */}
                    <View style={styles.buy}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, color: "blue" }}>View Details</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }}>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* end plan fields */}

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    jiocontainer:
    {
        flex: 1,
        borderTopLeftRadius: 12,
        borderTopEndRadius: 12,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 5
    },
    text:
    {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 3,
        borderColor: "gray",
        height: 35
    },
    text1:
    {
        fontWeight: "bold",
        width: "50%",
        textTransform: "capitalize",
    },

    iconInput:
        { height: 20, width: 20, backgroundColor: "gray", borderRadius: 50, alignItems: "center", justifyContent: "center" },
    plan:
        { flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10 },
    buy:
        { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    button:
        { marginRight: 20, backgroundColor: "blue", paddingHorizontal: 30, paddingVertical: 10, borderRadius: 10 },
    cardContainer:
        { flex: 1, borderBottomColor: "gray", borderBottomWidth: 1, padding: 10 },
    rupess:
    {
        color: "red"
    }
});