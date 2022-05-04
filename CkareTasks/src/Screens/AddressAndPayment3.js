import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

export default function AddressAndPayment3({ navigation }) {
  return (
    <View style={styles.container}>
      {/* first row */}
      <View style={styles.firstrow} >
        <View>
          <AntDesign name="left" size={20} color="#666" style={styles.leftIcon} onPress={() => navigation.navigate('AddressAndPayment2')} />
        </View>
      </View>

      {/* 2nd row */}
      <View style={styles.secondrow}>
        <View style={styles.secondrowDiv}>
          {/* order details text */}
          <View>
            <Text style={styles.orderDetailsTxt}>Order Details</Text>
          </View>
          {/* order deatils div */}
          <View style={styles.orderDetailsDiv}>
            <View style={styles.orderDetailsLeftDiv}>
              <View style={styles.medicineNamesDiv}>
                <Text style={styles.orderDetailsDivTxt}>Montec LC 500mg</Text>
                <Text style={styles.orderDetailsDivTxt}>Paracetamol</Text>
                <Text style={styles.orderDetailsDivTxt}>Dolo-650</Text>
                <Text style={styles.orderDetailsDivTxt}>Glucose-D</Text>
              </View>
              <View style={styles.medicineQuantityDiv}>
                <Text style={styles.orderDetailsDivTxt}>x 2</Text>
                <Text style={styles.orderDetailsDivTxt}>x 10</Text>
                <Text style={styles.orderDetailsDivTxt}>x 5</Text>
                <Text style={styles.orderDetailsDivTxt}>x 4</Text>
              </View>
            </View>
            <View style={styles.orderDetailsRightDiv}>
              <Text style={styles.orderDetailsDivTxt}>₹ 40.00 </Text>
              <Text style={styles.orderDetailsDivTxt}>₹ 100.00 </Text>
              <Text style={styles.orderDetailsDivTxt}>₹ 540.00 </Text>
              <Text style={styles.orderDetailsDivTxt}>₹ 450.00 </Text>
            </View>
          </View>
          {/* use coupons div */}
          <View style={styles.useCouponsDiv}>
            <View>
              <Text style={styles.useCouponsTxt}>Use Coupons</Text>
            </View>
            <View>
              <Text style={styles.applyTxt}>Apply</Text>
            </View>
          </View>
          {/* payment summary div */}
          <View style={styles.paymentSummaryWholeDiv}>
            {/* payment summary txt */}
            <View>
              <Text style={styles.paymentSummaryTxt}>Payment Summary</Text>
            </View>
            <View style={styles.paymentSummaryDiv}>
              <View >
                <Text style={styles.orderDetailsDivTxt}>Total Mrp</Text>
                <Text style={styles.orderDetailsDivTxt}>Total Discounts</Text>
                <Text style={styles.orderDetailsDivTxt}>GST</Text>
                <Text style={styles.orderDetailsDivTxt}>Shipping Fee</Text>
              </View>
              <View >
                <Text style={styles.orderDetailsDivTxt}>₹ 1240.00 </Text>
                <Text style={styles.orderDetailsDivTxt}>₹ 240.00 </Text>
                <Text style={styles.orderDetailsDivTxt}>₹ 40.00 </Text>
                <Text style={styles.applyTxt}>Free </Text>
              </View>
            </View>
          </View>
          {/* grand total div */}
          <View style={styles.useCouponsDiv}>
            <View>
              <Text style={styles.orderDetailsDivTxt}>Grand Total</Text>
            </View>
            <View>
              <Text style={styles.orderDetailsDivTxt}>₹ 1040.00</Text>
            </View>
          </View>
        </View>
      </View>

      {/* payment method div */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.paymentMethodMainDiv}>
          <View>
            <Text style={styles.paymentSummaryTxt}>Payment Method</Text>
          </View>
          <View style={styles.paymentMethodTopDiv}>
            <View style={styles.paymentMethodLeftDiv}>
              <View>
                <AntDesign name="creditcard" size={15} color="#3E64FF" />
              </View>
              <View>
                <Text style={styles.onlineTxt}>Online</Text>
              </View>
            </View>
            <View style={styles.paymentMethodRightDiv}>
              <View>
                <AntDesign name="checkcircle" size={15} color="#09960E" />
              </View>
            </View>
          </View>
          <View style={styles.paymentMethodBottomDiv} >
            <View style={styles.paymentMethodLeftDiv}>
              <View>
                <MaterialCommunityIcons name="cash" size={15} color="#09960E" onPress={() => navigation.navigate('AddressAndPayment4')}  />
              </View>
              <View>
                <Text style={styles.onlineTxt} onPress={() => navigation.navigate('AddressAndPayment4')} >Cash</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* button */}
      <View style={{ alignItems: 'center' }}>
        <LinearGradient colors={['#00E0C5', '#009987']} style={styles.proceedToPayBtnDiv}  >
          <TouchableOpacity style={styles.proceedToPayBtn}  >
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
    marginVertical: 20,
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
    borderColor: '#00E0C5',
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
    borderColor: '#e1e1e1',
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
