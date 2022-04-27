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
import Patholabs from './src/screens/Patholabs';
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
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







