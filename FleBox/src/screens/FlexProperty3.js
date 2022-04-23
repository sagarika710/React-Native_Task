import { View, Text } from 'react-native'
import React from 'react'

export default function FlexProperty3() {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 100, height: 100, borderColor: "black", borderWidth: 5, justifyContent: "flex-start", padding: 20, borderRadius: 10 }}>
                    <View style={{ backgroundColor: "black", height: "100%", width: "100%", borderRadius: 10 }}></View>
                    {/* try */}
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                    width: 100, height: 100, borderColor: "black",
                    borderWidth: 5, alignItems: 'center', padding: 20, borderRadius: 10
                }}>
                    <View style={{ backgroundColor: "violet", height: "100%", width: "100%", borderRadius: 10 }}></View>
                </View>
            </View>


            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <View style={{
                    width: 100, height: 100, borderColor: "black",
                    borderWidth: 5, alignItsems: 'center', padding: 20, borderRadius: 10
                }}>
                    <View style={{ backgroundColor: "black", height: "100%", width: "100%", borderRadius: 10 }}></View>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                    width: 100, height: 100, borderColor: "black",
                    borderWidth: 5, alignItems: 'center', padding: 20, borderRadius: 10
                }}>
                    <View style={{ backgroundColor: "violet", height: "100%", width: "100%", borderRadius: 10 }}></View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{
                    width: 100, height: 100, borderColor: "black",
                    borderWidth: 5, alignItems: 'center', padding: 20, borderRadius: 10
                }}>
                    <View style={{
                        backgroundColor: "black", borderRadius: 10,
                        height: "100%", width: "100%"
                    }}></View>
                </View>

            </View>

        </View>
    )
}

