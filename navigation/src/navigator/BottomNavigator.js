import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

} from '@react-navigation/drawer';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//import screen

import Home from '../screens/Home'
import Clinics from '../screens/Clinics';
import Doctors from '../screens/Doctors';
import LogOut from '../screens/LogOut';
import MedicinStore from '../screens/MedicinStore';
import Membership from '../screens/Membership';
import Patholabs from '../screens/Patholabs';
import ReferAndEarns from '../screens/ReferAndEarns';
import MyOrders from '../screens/MyOrders';



const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    const DrawerItemListData = [
        {
            name: "Membership",
            icon: "crown",
            routeName: "Membership"
        },
        {
            name: "My Orders",
            icon: "shopping-bag",
            routeName: "MyOrders"
        },
        {
            name: "Medicine Store",
            icon: "pills",
            routeName: "MedicinStore"
        },
        {
            name: "Doctor",
            icon: "user-md",
            routeName: "Doctors"
        },
        {
            name: "Pathalabs",
            icon: "flask",
            routeName: "Patholabs"
        },
        {
            name: "Clinics",
            icon: "clinic-medical",
            routeName: "Clinics"
        },
        {
            name: "Refers & Earns",
            icon: "gift",
            routeName: "ReferAndEarns"
        },
        {
            name: "Logout",
            icon: "sign-out-alt",
            routeName: "LogOut"
        },
    ]

    var currentRouteIndex = props.navigation.getState().index

    return (
        <View style={{ flex: 1, backgroundColor: "#01e0c5", }}>
            <View style={{ flex: 1, justifyContent: "space-around" }}>
                <View style={{ height: 80, alignItems: "flex-end", justifyContent: "center" }}>
                    <Text style={{ color: "white" }}>Deepti Padhy</Text>
                </View>

                <DrawerContentScrollView >

                    {DrawerItemListData.map((item, index) => {

                        return (
                            <DrawerItem label={item.name}
                                key={index}
                                icon={() => <FontAwesome5 name={item.icon}
                                    size={17}
                                    style={{
                                        marginLeft: 10,
                                        color: currentRouteIndex == index ? "#01e0c5" : "white"
                                    }} />}

                                activeBackgroundColor={"white"}
                                onPress={() => props.navigation.navigate(item.routeName)}
                                focused={currentRouteIndex == index ? true : false}
                                labelStyle={{ fontWeight: "bold", color: currentRouteIndex == index ? "#01e0c5" : "white" }}

                                style={{

                                    marginHorizontal: -2,
                                    width: "90%",
                                    marginVertical: 7, borderTopRightRadius: 20, borderBottomRightRadius: 20
                                }}
                            />
                        );
                    })}

                </DrawerContentScrollView>



            </View>

        </View >
    );
}
const BottomNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                //     // headerStyle:
                //     // {
                //     //     backgroundColor: "white",
                //     // },
                //     // headeTintColor: "fff",
                //     // headerTitleStyle:
                //     // {
                //     //     fontWeight: "bold"
                //     // },
                //     // headerTitle: "",
                //     // //drawerPosition: "right"
                headerShown: false
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            {/* <Drawer.Screen name="Home" component={Home}
            /> */}
            <Drawer.Screen name="Membership" component={Membership}
            />
            <Drawer.Screen name="MyOrders" component={MyOrders}
            />
            <Drawer.Screen name="MedicinStore" component={MedicinStore}
            />
            <Drawer.Screen name="Doctors" component={Doctors}
            />
            <Drawer.Screen name="Patholabs" component={Patholabs}
            />
            <Drawer.Screen name="Clinics" component={Clinics}
            />
            <Drawer.Screen name="ReferAndEarns" component={ReferAndEarns}
            />
            <Drawer.Screen name="LogOut" component={LogOut}
            />


        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({})
export default BottomNavigator






