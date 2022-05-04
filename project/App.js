// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import Med from './src/screens/medicine'
import Orderhistory from './src/screens/orderhistory'
import Order from './src/screens/orders'
import Ordertwo from './src/screens/order2'
import Orderheading from './src/screens/orderhistab'
import Wel from './src/screens/welcome';
import Let from './src/screens/letsgo';
import Veri from './src/screens/verfi';
import Wron from './src/screens/wrong';
import Letsign from './src/screens/letsignup';
import Welsign from './src/screens/welsignup';
import Homesign from './src/screens/homesignup';
import Verisign from './src/screens/verisign';
import Wronsign from './src/screens/wrongsign';
import Regsign from './src/screens/registersign';
import Testhistory from './src/screens/orderhistorytwo';
import prescription from './src/screens/prescription';
import Orderprice from './src/screens/orderprice';
import Mapp from './src/screens/map';
import Orderid from './src/screens/orderid';
import Mapp2 from './src/screens/map2';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false} screenOptions={{headerTitle: 'Test', headerShown: false}} initialRouteName="Let">
      <Stack.Screen name="Let" component={Let} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Wel" component={Wel} />
      <Stack.Screen name="Veri" component={Veri} />
      <Stack.Screen name="Wron" component={Wron} />
      <Stack.Screen name="Letsign" component={Letsign} />
      <Stack.Screen name="Homesign" component={Homesign} />
      <Stack.Screen name="Welsign" component={Welsign} />
      <Stack.Screen name="Verisign" component={Verisign} />
      <Stack.Screen name="Wronsign" component={Wronsign} />
      <Stack.Screen name="Regsign" component={Regsign} />
      <Stack.Screen name="Med" component={Med} />
      <Stack.Screen name="Orderhistory" component={Orderhistory} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="prescription" component={prescription} />
      <Stack.Screen name="Orderheading" component={Orderheading} />
      <Stack.Screen name="Orderprice" component={Orderprice} />
      <Stack.Screen name="Mapp" component={Mapp} />
      <Stack.Screen name="Testhistory" component={Testhistory} />
      <Stack.Screen name="Ordertwo" component={Ordertwo} />
      <Stack.Screen name="Mapp2" component={Mapp2} />
      <Stack.Screen name="Orderid" component={Orderid} />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;