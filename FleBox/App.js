import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//import screens
import FlexProperty from './src/screens/FlexProperty';
import FlexProperty2 from './src/screens/FlexProperty2';
import FlexProperty3 from './src/screens/FlexProperty3';
import JiodataPack from './src/screens/JiodataPack';
export default function App() {
  return (
    <View style={styles.container}>

      {/* <FlexProperty /> */}
      {/* <FlexProperty2 /> */}
      {/* <FlexProperty3 /> */}
       <JiodataPack /> 
    </View>
  )

}
const styles = StyleSheet.create({
  container:
  {
    flex: 1
  }
});