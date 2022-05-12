import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <View>
          <Image onPress={() => navigation.navigate('Screen1')} source={require('../assets/backicon2.png')} />
        </View>
        <View>
          <Text style={styles.Orders}>Orders</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.Box}>
          <View>
            <Text style={styles.Orderdetailes}>Order detailes</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}>
              <Text></Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <View style={styles.Medicineprice}>
              <View>
                <Text style={styles.medicine}>Complete Blood Count</Text>
              </View>
              <View>
                <Text style={styles.price}>₹ 40.00</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Medicineprice}>
              <View>
                <Text style={styles.medicine}>TSH</Text>
              </View>
              <View>
                <Text style={styles.price}>₹ 100.00</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Medicineprice}>
              <View>
                <Text style={styles.medicine}>Liver Function Test</Text>
              </View>
              <View>
                <Text style={styles.price}>₹ 540.00</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Medicineprice}>
              <View>
                <Text style={styles.medicine}>Thyphoid Test</Text>
              </View>
              <View>
                <Text style={styles.price}>₹ 450.00</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Line}>
              <Text></Text>
            </View>
          </View>

          <View style={styles.samplecollection}>
            <View style={styles.round}>
              <Text></Text>
            </View>
            <View style={styles.sample}>
              <Text style={styles.Sample}>Sample Collect from home</Text>
            </View>
          </View>
          <View style={styles.Samplecollection}>
            <View style={styles.Round}>
              <Text></Text>
            </View>
            <View style={styles.sample}>
              <Text style={styles.Sample}>Sample give on lab</Text>
            </View>
          </View>
          <View style={styles.Address}>
            <View>
              <Text style={styles.address}>
                Collect From Sagarika Mohanty, Nandan
              </Text>
            </View>
            <View>
              <Text style={styles.address}>
                Vihar, Patia, Bhubaneswar, 751024
              </Text>
            </View>
          </View>

          <View style={styles.Changeaddress}>
              <View><Text style={styles.changeaddress}>Change Address</Text></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Line}>
              <Text></Text>
            </View>
          </View>
          <View style={styles.square}>
            <View><Text style={styles.payment}>Payment Summary</Text></View>
        <View style={styles.div3}>
        <View style={styles.Row1}>
          <Text style={styles.last1}>Total MRP</Text>
          <Text style={styles.last2}>₹1240.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>Total Discount</Text>
          <Text style={styles.last2}>₹240.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>GST</Text>
          <Text style={styles.last2}>₹40.00</Text>
        </View>
        <View style={styles.Row2}>
          <Text style={styles.last1}>Shipping Fee</Text>
          <Text style={styles.free}>Free</Text>
        </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <Text style={styles.line}></Text>
      </View>
        <View style={styles.Row2}>
          <Text style={styles.Grand}>Grand Total</Text>
          <Text style={styles.Total}>₹1040.00</Text>
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
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  last1: {
    fontSize: 11,  
    marginTop: 3,
  },
  last2: {
    fontSize: 11,  
  },
  Grand: {
    fontSize: 11,  
    marginTop: 10,
  },
  Total: {
    fontSize: 11,  
    marginTop: 10,
  },
  free: {
    color: '#009987',
    marginRight: 10,
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
marginLeft: 15,
width: Dimensions.get('window').width * 0.82,
    },
    Row2: {
width: Dimensions.get('window').width * 0.82,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 15,
      },
  payment: {
    marginLeft: 12,
    marginTop: 12,
    color: '#000000',
},
    Changeaddress: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 15,
     borderWidth: 1,
     width: Dimensions.get('window').width * 0.3,
     height: Dimensions.get('window').height * 0.04,
     borderRadius: 5,
    borderColor: '#009987',
    },
    changeaddress: {
        fontSize: 11,
        color: '#009987',
    },

  address: {
    fontSize: 11,
    color: '#000000',
  },
  Address: {
    marginLeft: 10,
    marginTop: 20,
  },
  sample: {
    marginHorizontal: 5,
  },
  Sample: {
    fontSize: 11,
    marginTop: 3,
    color: '#000000',
  },
  samplecollection: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  Samplecollection: {
    marginLeft: 10,
    marginTop: 4,
    flexDirection: 'row',
  },
  round: {
    borderWidth: 1.3,
    width: Dimensions.get('window').width * 0.035,
    height: Dimensions.get('window').height * 0.02,
    borderRadius: 40,
    marginTop: 3,
    borderColor: '#E1E1E1',
    backgroundColor: '#009987',
  },
  Round: {
    borderWidth: 1.3,
    width: Dimensions.get('window').width * 0.035,
    height: Dimensions.get('window').height * 0.02,
    borderRadius: 40,
    marginTop: 3,
    borderColor: '#E1E1E1',
  },
  medicine: {
    fontSize: 11,
    color: '#717171',
    marginTop: 5,
  },
  price: {
    fontSize: 11,
    color: '#717171',
    marginTop: 5,
  },
  Box: {
    marginTop: 15,
    width: Dimensions.get('window').width * 0.92,
    height: Dimensions.get('window').height * 0.75,
    borderWidth: 1.3,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  Orders: {
    fontSize: 19,
    color: '#000000',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
  },
  Heading: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
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
    marginTop: 10,
  },
  Orderdetailes: {
    fontSize: 11,
    color: '#000000',
    marginTop: 15,
    marginLeft: 10,
  },
  line: {
    borderBottomWidth: 0.8,
    width: Dimensions.get('window').width * 0.85,
    borderBottomColor: '#717171',
  },
  Line: {
    borderBottomWidth: 0.8,
    width: Dimensions.get('window').width * 0.85,
    borderBottomColor: '#E1E1E1',
  },
  Medicineprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.85,
  },
});

export default Screen2;
