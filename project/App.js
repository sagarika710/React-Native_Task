// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './android/app/src/screens/home'
import Med from './android/app/src/screens/medicine'
import Orderhistory from './android/app/src/screens/orderhistory'
import Order from './android/app/src/screens/orders'
import Ordertwo from './android/app/src/screens/order2'
import Orderhistab from './android/app/src/screens/orderhistab'
import Wel from './android/app/src/screens/welcome';
import Let from './android/app/src/screens/letsgo';
import Veri from './android/app/src/screens/verfi';
import Wron from './android/app/src/screens/wrong';
import Letsign from './android/app/src/screens/letsignup';
import Welsign from './android/app/src/screens/welsignup';
import Homesign from './android/app/src/screens/homesignup';
import Verisign from './android/app/src/screens/verisign';
import Wronsign from './android/app/src/screens/wrongsign';
import Regsign from './android/app/src/screens/registersign';



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
      <Stack.Screen name="Ordertwo" component={Ordertwo} />
      <Stack.Screen name="Orderhistab" component={Orderhistab} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;