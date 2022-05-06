//add react-native-gesture-handler
import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import screens
import BottomNavigator from './src/navigator/BottomNavigator';
const Stack = createNativeStackNavigator();

// 
import Profile from './src/screens/Profile';
import CoupnsField from './src/screens/CoupnsField';
import Patholabs from './src/screens/Patholabs';
import Doctors from './src/screens/Doctors';
import Appointment from './src/screens/Appointment';
import Payment from './src/screens/Payment';
import Apoointmentdetails from './src/screens/Apoointmentdetails'
import Changeaddress from './src/screens/Changeaddress';
import Addressofdoctor from './src/screens/Addressofdoctor';
import Doctorappoitmentdetails from './src/screens/Doctorappoitmentdetails'
function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottonNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patholabs"
          component={Patholabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctors"
          component={Doctors}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoupnsField"
          component={CoupnsField}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Apoointmentdetails"
          component={Apoointmentdetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Changeaddress"
          component={Changeaddress}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctorappoitmentdetails"
          component={Doctorappoitmentdetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Addressofdoctor"
          component={Addressofdoctor}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;








