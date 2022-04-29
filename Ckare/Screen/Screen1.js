import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Orders</Text>

      <View style={styles.div}>
        <Text style={styles.Order}>Order detailes</Text>
        <View style={styles.Row}>
          <Text style={styles.txt1}>Montec LC 500MG</Text>
          <Text style={styles.txt2}>x 2</Text>
          <Text style={styles.txt3}>₹ 40.00</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.txt4}>Paracetamol</Text>
          <Text style={styles.txt5}>x 10</Text>
          <Text style={styles.txt6}>₹ 100.00</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.txt4}>Dolo-650</Text>
          <Text style={styles.txt7}>x 5</Text>
          <Text style={styles.txt8}>₹ 540.00</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.txt4}>Glucose-D</Text>
          <Text style={styles.txt9}>x 4</Text>
          <Text style={styles.txt10}>₹ 450.00</Text>
        </View>
        <View style={styles.line}></View>
        <View><Text style={styles.payment}>Payment Summary</Text></View>
        <View style={styles.div1}>
        <View style={styles.Row1}>
          <Text style={styles.last1}>Total MRP</Text>
          <Text style={styles.last2}>₹1240.00</Text>
        </View>
        <View style={styles.Row1}>
          <Text style={styles.last3}>Total Discount</Text>
          <Text style={styles.last4}>₹240.00</Text>
        </View>
        <View style={styles.Row1}>
          <Text style={styles.last5}>GST</Text>
          <Text style={styles.last6}>₹40.00</Text>
        </View>
        <View style={styles.Row1}>
          <Text style={styles.last7}>Shipping Fee</Text>
          <Text style={styles.last8}>Free</Text>
        </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.Row1}>
          <Text style={styles.last9}>Grand Total</Text>
          <Text style={styles.last10}>₹1040.00</Text>
        </View>
      </View>
      <View><Text style={styles.time}>Deliver By 26 Feb 2022 | 10.00 PM</Text></View>
      <View style={styles.add}>
            <Text style={styles.add1}>Add New Address</Text> 
            </View>
            <TouchableOpacity style={styles.btn}>
             <Text style={styles.btn1} onPress= {() => navigation.navigate('Screen2')}>Proceed to Pay</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    btn1: {
     color: 'white',
    },
    time: {
        marginLeft: 22,
        marginTop: 16,
    color: 'black',
    fontSize: 12,
    },
    btn: {
        marginLeft: 10,
        marginTop: 80,
        borderWidth: 1,
        paddingHorizontal: 125,
        paddingVertical: 10,
        marginLeft: 20,
        width: 370,
      borderRadius: 20,
      backgroundColor: '#37a987',
      borderColor: '#37a987',
    },
    add1: {
        fontSize: 10,
        marginLeft: 22,
        marginTop: 20,
        borderWidth: 1,
         width: 366,
         paddingHorizontal: 138,
         paddingVertical: 8,
         borderRadius: 5,
       color: '#009987',
       borderColor: '#37a987',
       },
    last1: {
        marginLeft: 16,
        marginTop: 16,
        fontSize: 12,
      },
      last3: {
        marginLeft: 16,
        marginTop: 8,
        fontSize: 12,
      },
      last5: {
        marginLeft: 16,
        marginTop: 8,
        fontSize: 12,
      },
      last7: {
        marginLeft: 16,
        marginTop: 8,
        fontSize: 12,
      },
      last2: {
        marginLeft: 210,
        marginTop: 16,
        fontSize: 12,
      },
      last4: {
        marginLeft: 187,
        marginTop: 8,
        fontSize: 12,
      },
      last6: {
        marginLeft: 248,
        marginTop: 8,
        fontSize: 12,
      },
      last8: {
        marginLeft: 197,
        color: '#009987',
        marginTop: 8,
        fontSize: 14,
      },
      last9: {
        marginLeft: 18,
        marginTop: 15,
        fontSize: 12,
      },
      last10: {
        marginLeft: 197,
        marginTop: 15,
        fontSize: 12,
      },

    payment: {
        marginLeft: 17,
        marginTop: 12,
    color: 'black',
    },
    Row1: {
    flexDirection: 'row',
    },
    container: {
        backgroundColor: 'white',
    },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#E1E1E1',
        width: 340,
        marginLeft: 12,
        marginTop: 30,
    },
  txt1: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 12,
  },
  txt2: {
    marginLeft: 25,
    marginTop: 16,
    fontSize: 12,
  },
  txt3: {
    marginLeft: 120,
    marginTop: 16,
    fontSize: 12,
  },
  txt4: {
    marginLeft: 16,
    marginTop: 8,
    fontSize: 12,
  },
  txt5: {
    marginLeft: 60,
    marginTop: 8,
    fontSize: 12,
  },
  txt6: {
    marginLeft: 113,
    marginTop: 8,
    fontSize: 12,
  },
  txt7: {
    marginLeft: 82,
    marginTop: 8,
    fontSize: 12,
  },
  txt8: {
    marginLeft: 120,
    marginTop: 8,
    fontSize: 12,
  },
  txt9: {
    marginLeft: 76,
    marginTop: 8,
    fontSize: 12,
  },
  txt10: {
    marginLeft: 120,
    marginTop: 8,
    fontSize: 12,
  },
  head: {
    color: 'black',
    marginLeft: 60,
    marginTop: 56,
    fontSize: 17,
  },
  Order: {
    color: 'black',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E1E1E1',
    width: 340,
    marginLeft: 10,
    padding: 12,
  },
  Row: {
    flexDirection: 'row',
  },
  div: {
    borderWidth: 2,
    height: 430,
    width: 370,
    marginLeft: 20,
    marginTop: 50,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
});
export default Screen1;
