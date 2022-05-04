import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native'

const Screen3 = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Medicine list</Text>
      <View style={styles.div}>
      <Text style={styles.order}>Order detailes</Text>
      <Text style={styles.line}></Text>
      <View style={styles.row1}>
      <Text style={styles.med1}>Montec LC 500MG</Text>
      <Text style={styles.num1}>x 2</Text>
      <Text style={styles.price1}>₹ 40.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Paracetamol</Text>
      <Text style={styles.num2}>x 10</Text>
      <Text style={styles.price2}>₹ 100.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Dolo-650</Text>
      <Text style={styles.num3}>x 5</Text>
      <Text style={styles.price3}>₹ 540.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Glucose-D</Text>
      <Text style={styles.num4}>x 4</Text>
      <Text style={styles.price4}>₹ 450.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Montec LC 500MG</Text>
      <Text style={styles.num5}>x 2</Text>
      <Text style={styles.price5}>₹ 40.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Paracetamol</Text>
      <Text style={styles.num6}>x 10</Text>
      <Text style={styles.price6}>₹ 100.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Dolo-650</Text>
      <Text style={styles.num7}>x 8</Text>
      <Text style={styles.price7}>₹ 540.00</Text>
      </View>
      <View style={styles.row1}>
      <Text style={styles.med1}>Glucose-D</Text>
      <Text style={styles.num8}>x 6</Text>
      <Text style={styles.price8}>₹ 450.00</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1}>Confirm</Text>
          </TouchableOpacity>

      </View>
    )
  };

  const styles = StyleSheet.create({
    btn1: {
      color: 'white',
     },
    btn: {
      marginLeft: 10,
      marginTop: 260,
      borderWidth: 1,
      paddingHorizontal: 150,
      paddingVertical: 10,
      marginLeft: 20,
      width: 370,
    borderRadius: 20,
    backgroundColor: '#37a987',
    borderColor: '#37a987',
  },
    line: {
      borderBottomWidth: 1,
      marginBottom: 10,
      width: 345,
    borderColor: '#E1E1E1',
    },
    order: {
      marginTop: 20,
      color: 'black',
      fontSize: 12,
    },
    med1: {
      fontSize: 11,
    },
    num1: {
      fontSize: 11,
      marginLeft: 40,
    },
    num2: {
      fontSize: 11,
      marginLeft: 73,
    },
    num3: {
      fontSize: 11,
      marginLeft: 95,
    },
    num4: {
      fontSize: 11,
      marginLeft: 89,
    },
    num5: {
      fontSize: 11,
      marginLeft: 45,
    },
    num6: {
      fontSize: 11,
      marginLeft: 78,
    },
    num7: {
      fontSize: 11,
      marginLeft: 98,
    },
    num8: {
      fontSize: 11,
      marginLeft: 92,
    },

    price1: {
      fontSize: 11,
      marginLeft: 45,
    },
    price2: {
      fontSize: 11,
      marginLeft: 38,
    },
    price3: {
      fontSize: 11,
      marginLeft: 43,
    },
    price4: {
      fontSize: 11,
      marginLeft: 42,
    },
    price5: {
      fontSize: 11,
      marginLeft: 42,
    },
    price6: {
      fontSize: 11,
      marginLeft: 35,
    },
    price7: {
      fontSize: 11,
      marginLeft: 42,
    },
    price8: {
      fontSize: 11,
      marginLeft: 41,
    },
    container: {
      backgroundColor: 'white',
      height: 1000,
    },
    head: {
      marginTop: 30,
      marginLeft: 80,
      color: 'black',
    },
    div: {
      height: 360,
      width: 370,
      borderRadius: 10,
      marginLeft: 20,
      paddingLeft: 10,
        borderWidth: 1,
        marginTop: 40,
    borderColor: '#E1E1E1',
    },
    row1: {
      flexDirection: 'row',
      marginVertical: 9,
    }
  });

export default Screen3;



