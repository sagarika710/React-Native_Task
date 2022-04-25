// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from './android/app/src/screens/login'
import Home from './android/app/src/screens/home'
import Verify from './android/app/src/screens/verify'
import Wrong from './android/app/src/screens/wrong'
import Reg from './android/app/src/screens/register'
import Let from './android/app/src/screens/letgo'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false} screenOptions={{headerTitle: 'Test', headerShown: false}} initialRouteName="Let">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Verify} />
      <Stack.Screen name="Wrong" component={Wrong} />
      <Stack.Screen name="Reg" component={Reg} />
      <Stack.Screen name="Let" component={Let} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;