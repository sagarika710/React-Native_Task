import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Resturant from './src/screens/Resturant'
export default function App() {
  return (
    <View style={styles.container}>

      <Resturant />
    </View>
  )

}
const styles = StyleSheet.create({
  container:
  {
    flex: 1
  }
});