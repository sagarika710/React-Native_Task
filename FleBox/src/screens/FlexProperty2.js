import { View, Text } from 'react-native'
import React from 'react'

export default function FlexProperty2() {
    return (
        <View style={{ flex: 1, }}>
            {/* for first view */}
            <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 10 }}>
                <View style={{ width: 100, height: 100, backgroundColor: "brown" }}>

                </View>
            </View>
            <View style={{
                flexDirection: "row", flex: 2, alignItems: "center",
                justifyContent: "space-around"
            }}>
                <View style={{ width: 100, height: 100, backgroundColor: "yellow", }}>

                </View>
                <View style={{ width: 100, height: 100, backgroundColor: "black" }}>

                </View>
                <View style={{ width: 100, height: 100, backgroundColor: "lightyellow" }}>

                </View>

            </View>
            <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginLeft: 10 }}>
                <View style={{ width: 100, height: 100, backgroundColor: "brown" }}>

                </View>
            </View>
        </View>
    )
}

