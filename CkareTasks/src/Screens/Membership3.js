import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import bgImage from '../assets/greenBackground.png';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

export default function Membership3({navigation}) {
  return (
    // <View>
    <ImageBackground source={bgImage} style={styles.container}>
      <View style={styles.goPremiumDiv}  >
        <Text style={styles.goPremiumTxt} onPress={() => navigation.navigate('Membership2')} >Go Premium</Text>
      </View>
      <View style={styles.midBoxDiv}>
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}> 
        <View style={styles.midBox}>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
          <View style={styles.midBoxbottomdiv}>
            <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹400</Text>
                <Text style={styles.midBoxbottomdiv800}>₹800</Text>
            </View>
            <View style={styles.midBoxbottomdivright}>
                 <Text style={styles.midBoxbottomdiv1month}>1 Month</Text>
            </View>
          </View>
        </View>
        <View style={styles.midBox}>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
          <View style={styles.midBoxbottomdiv}>
            <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹600</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1000</Text>
            </View>
            <View style={styles.midBoxbottomdivright}>
                 <Text style={styles.midBoxbottomdiv1month}>3 Month</Text>
            </View>
          </View>
        </View>
        <View style={styles.midBox}>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
          <View style={styles.midBoxbottomdiv}>
            <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹800</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1200</Text>
            </View>
            <View style={styles.midBoxbottomdivright}>
                 <Text style={styles.midBoxbottomdiv1month}>6 Month</Text>
            </View>
          </View>
        </View>
        <View style={styles.midBox}>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
          <View style={styles.midBoxbottomdiv}>
            <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹1200</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1800</Text>
            </View>
            <View style={styles.midBoxbottomdivright}>
                 <Text style={styles.midBoxbottomdiv1month}>12 Month</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient colors={[ '#00E0C5','#009987']} style={styles.takeFreeTrialBtnDiv} >
          <TouchableOpacity style={styles.takeFreeTrialBtn} onpress={() => navigation.navigate('Medicine1ByCategory')} >
            <Text style={styles.takeFreeTrialBtnTxt}  >Become a Member</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      

    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingTop: Constants.statusBarHeight,
  },
  goPremiumDiv: {
    height: Dimensions.get('window').height * 0.23,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  goPremiumTxt: {
    color: '#fff',
    // fontFamily: 'Mulish',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  midBoxDiv: {
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    height: Dimensions.get('window').height * 0.55,
  },
  midBox: {
    width: 330,
    height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 10,
  },
  midBoxbottomdiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopColor: '#fff',
    borderTopWidth: 1,
    paddingVertical: 20,
    marginTop: 20,
  },
  midBoxbottomdivleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBoxbottomdiv400: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
    marginRight: 15,
  },
  midBoxbottomdiv800: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    textDecorationLine: 'line-through',
  },
  midBoxbottomdivright: {
    // width: 80,
    // height: 25,
    // backgroundColor: 'blue',
    paddingVertical: 5,
  },
  midBoxbottomdiv1month: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 15,
  },
  takeFreeTrialBtnDiv: {
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
  takeFreeTrialBtn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeFreeTrialBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  }

});

