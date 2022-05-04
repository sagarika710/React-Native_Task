import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Membership1 from './src/Screens/Membership1';
import Membership2 from './src/Screens/Membership2';
import Membership3 from './src/Screens/Membership3';
import Refer from './src/Screens/Refer';
import Medicine1ByCategory from './src/Screens/Medicine1ByCategory';
import Medicine2ByCategory from './src/Screens/Medicine2ByCategory';
import Medicine3ByCategory from './src/Screens/Medicine3ByCategory';
import Medicine4ByCategory from './src/Screens/Medicine4ByCategory';
import AddressAndPayment1 from './src/Screens/AddressAndPayment1';
import AddressAndPayment2 from './src/Screens/AddressAndPayment2';
import AddressAndPayment3 from './src/Screens/AddressAndPayment3';
import AddressAndPayment4 from './src/Screens/AddressAndPayment4';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={AddressAndPayment4} screenOptions={{ headerShown: false}}>
          <Stack.Screen name= "AddressAndPayment4" component={AddressAndPayment4} />
          <Stack.Screen name="Refer" component={Refer}   />                                  
          <Stack.Screen name="Membership1" component={Membership1} />  
          <Stack.Screen name="Membership2" component={Membership2}   />
          <Stack.Screen name="Membership3" component={Membership3}  />
          <Stack.Screen name="Medicine2ByCategory" component={Medicine2ByCategory}   /> 
          <Stack.Screen name="Medicine3ByCategory" component={Medicine3ByCategory}   />
          <Stack.Screen name="Medicine4ByCategory" component={Medicine4ByCategory}   />
          <Stack.Screen name= "AddressAndPayment1" component={AddressAndPayment1} />
          <Stack.Screen name= "AddressAndPayment2" component={AddressAndPayment2} />
          <Stack.Screen name= "AddressAndPayment3" component={AddressAndPayment3} />
          
          <Stack.Screen name="Medicine1ByCategory" component={Medicine1ByCategory}   /> 
          
          
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
