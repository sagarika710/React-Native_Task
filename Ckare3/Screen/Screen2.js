import React, { Component } from 'react'
import { Text, View,Dimensions,Image, TouchableOpacity,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Screen2 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Medicine list</Text>
        <View style={{alignItems: 'center'}}>
        <View style={styles.Box}>
          <Text style={styles.Order}>Order detailes</Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}></View>
          </View>
          <View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Montec LV 500MG</Text>
                </View>
                <View><Text style={styles.medi}>x 2</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 40.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>

            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Paracetamol</Text>
                </View>
                <View><Text style={styles.medi}>x 10</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 100.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Dolo-650</Text>
                </View>
                <View><Text style={styles.medi}>x 5</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 540.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Glucose-D</Text>
                </View>
                <View><Text style={styles.medi}>x 4</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 450.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Montec LV 500MG</Text>
                </View>
                <View><Text style={styles.medi}>x 7</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 40.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Paracetamol</Text>
                </View>
                <View><Text style={styles.medi}>x 5</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 100.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Dolo-650</Text>
                </View>
                <View><Text style={styles.medi}>x 8</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 540.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
            <View style={styles.Row1}>
            <View style={styles.row1}>
                </View>
            <View><Text style={styles.Medi}>Glucose-D</Text>
                </View>
                <View><Text style={styles.medi}>x 6</Text>
              </View>
              <View style={styles.row2}>
              <View>
                <Text style={styles.Medi}>₹ 450.00</Text>
                </View>
              <View><Image style={styles.img2} source={require('../assets/icon.png')}/></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={styles.btn1}
                onPress={() => navigation.navigate('Screen3')}>
                Proceed to Pay
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      </View>
    )
  };

  const styles = StyleSheet.create({
    Medi: {
      color: '#717171',
      fontSize: 10,
      marginTop: 15,
      justifyContent: 'flex-start',
    },
    medi: {
      color: '#717171',
      fontSize: 10,
      marginTop: 15,
    },
    img2: {
      marginTop: 10,
    },
    row1: {
      flexDirection: 'row',
     justifyContent: 'space-between',
    },
    row2: {
      flexDirection: 'row',
      width: Dimensions.get('window').width * 0.3,
     justifyContent: 'space-between',
    },
    line: {
      borderBottomWidth: 1,
      borderColor: '#E1E1E1',
      width: Dimensions.get('window').width * 0.82,
      marginTop: 15,
      marginBottom: 10,
    },
    Order: {
      marginTop: 10,
      marginLeft: 15,
      color: '#222222',
      fontSize: 11,
    },
  Box: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#E1E1E1',
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.85,
  },
    btn1: {
      color: 'white',
      fontSize: 16,
      marginTop: 5,
    },
    btn: {
      borderRadius: 20,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').width * 0.1,
      marginTop: 180,
    },
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    head: {
      marginTop: 30,
      marginLeft: 80,
      color: 'black',
    },
  });

export default Screen2;



