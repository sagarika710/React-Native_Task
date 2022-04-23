import { Text, View } from 'react-native'
import React, { Component } from 'react'

const FlexProperty = () => {

    return (
        // main root view
        <View style={{ flex: 1, backgroundColor: "aqua" }}>
            <View style={{
                flexDirection: "row", flex: 1,
                alignItems: "center",
                // justifyContent: "space-between"
                justifyContent: "space-around"
            }}>
                <View style={{ width: 100, height: 100, backgroundColor: "brown" }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: "yellow" }}></View>
            </View>
            {/* 1st view over */}
            {/* 2nd view start*/}
            <View style={{
                flexDirection: "row", flex: 2, alignItems: "center",
                justifyContent: "center"
            }}>
                <View style={{ width: 100, height: 100, backgroundColor: "violet" }}></View>
            </View>
            {/* 2nd view over */}
            {/* 3rd view start*/}
            <View style={{
                flexDirection: "row", flex: 1,
                alignItems: "center", justifyContent: "space-around"
            }}>
                <View style={{ width: 100, height: 100, backgroundColor: "green" }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: "orange" }}></View>

            </View>
            {/* 3rd view over */}

        </View>
    )
}

export default FlexProperty;

