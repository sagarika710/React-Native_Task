import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import AddressAndPaymentComponent from '../Components/PaymentSummary';

export default function AddressAndPayment4({navigation}) {
  return (
    <View style={styles.container}>
      
      <AddressAndPaymentComponent />

      {/* payment method div */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.paymentMethodMainDiv}>
          <View>
            <Text style={styles.paymentSummaryTxt}>Payment Method</Text>
          </View>
          <TouchableOpacity style={styles.paymentMethodTopDiv} onPress={() => navigation.navigate('AddressAndPayment3')}>
            <View style={styles.paymentMethodLeftDiv} >
              <View>
                <AntDesign name="creditcard" size={15} color="#3E64FF" />
              </View>
              <View>
                <Text style={styles.onlineTxt} >Online</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.paymentMethodBottomDiv}>
            <View style={styles.paymentMethodLeftDiv}>
              <View>
                <MaterialCommunityIcons name="cash" size={15} color="#09960E" />
              </View>
              <View>
                <Text style={styles.onlineTxt}>Cash</Text>
              </View>
            </View>
            <View style={styles.paymentMethodRightDiv}>
              <View>
                <AntDesign name="checkcircle" size={15} color="#09960E" />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* button */}
      <View style={{ alignItems: 'center' }}>
        <LinearGradient colors={['#00E0C5', '#009987']} style={styles.proceedToPayBtnDiv}>
          <TouchableOpacity style={styles.proceedToPayBtn} onPress={() => navigation.navigate('AmbulanceOrder1')}>
            <Text style={styles.proceedToPayBtnTxt} >Proceed To Pay</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  // first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.56,
    backgroundColor: '#FEFEFE',
    // borderWidth: 1,
    // borderColor: '#e1e1e1',
    borderRadius: 10,
    paddingVertical: 25,
    paddingLeft: 15,
    paddingRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20,
  },
  orderDetailsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  orderDetailsDiv: {
    paddingVertical: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailsLeftDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  medicineNamesDiv: {
    justifyContent: 'flex-start',
    marginRight: 15,
  },
  orderDetailsDivTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
    marginBottom: 5,
  },
  useCouponsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  useCouponsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  applyTxt: {
    color: '#009987',
    fontSize: 12,
    fontWeight: '700',
    marginRight: 10,
  },
  // payment summary div
  paymentSummaryWholeDiv: {
    paddingVertical: 15,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
  },
  paymentSummaryTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 15,
  },
  paymentSummaryDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // payment methods
  paymentMethodMainDiv: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.2,
    paddingTop: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginBottom: 25,
  },
  paymentMethodTopDiv: {
    width: 304,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginBottom: 10,
  },
  paymentMethodBottomDiv: {
    width: 304,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00E0C5',
  },
  paymentMethodLeftDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlineTxt: {
    marginLeft: 20,
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  cashTxt: {
    marginLeft: 20,
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },

  // button
  proceedToPayBtnDiv: {
    width: 356,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  proceedToPayBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedToPayBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  }

});
