import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import bgImage from '../assets/greenBackground.png';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

export default function Membership2({navigation}) {
  return (
    <ImageBackground source={bgImage} style={styles.container}> 
      <View style={styles.CkareLogoDiv}>
        <Image source={require('../assets/cKareLogo.png')} style={styles.CkareLogoImg}  />
        <Text style={styles.premiumTxt} onPress={() => navigation.navigate('Membership1')} >Premium Member</Text>
        <Text style={styles.firstBecameTxt}>First became member on 08 jan 2022</Text>
      </View>
      <View style={styles.midBoxDiv}>
        <View style={styles.midBox}>
          <View style={styles.benefitsTxtDiv}>
            <Text style={styles.benefitsTxt}>Benefits</Text>
          </View>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
        </View>
      </View>
      <View style={styles.bottomDiv}>
        <View>
          <Text style={styles.yourMembershipTxt}>Your Membership</Text>
          <Text style={styles.expiresTxt}>Expires in 22 days</Text>
        </View>
        <View>
          <View style={{ alignItems: 'center' }}>
            <LinearGradient colors={['#00E0C5', '#009987']} style={styles.extendNowBtnDiv}>
              <TouchableOpacity style={styles.extendNowBtn} onPress ={() => navigation.navigate('Membership3')} >
                <Text style={styles.extendNowBtnTxt}  >Extend Now</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>



    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  CkareLogoDiv: {
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'flex-end',
    marginVertical: 35,
    paddingLeft: 35,
  },
  premiumTxt: {
    letterSpacing: 5,
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    marginVertical: 10,
  },
  firstBecameTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff'
  },
  midBoxDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.5,
    marginTop: 20,
  },
  midBox: {
    width: 331,
    height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingLeft: 25,
    paddingVertical: 15,
    // marginBottom: 10,
  },
  benefitsTxtDiv: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginRight: 20,
    paddingBottom: 15,
    marginBottom: 10,
  },
  benefitsTxt: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 11,
  },
  bottomDiv: {
    width: 339,
    height: 84,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
  },
  yourMembershipTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
  expiresTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  extendNowBtnDiv: {
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
  extendNowBtn: {
    width: 110,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extendNowBtnTxt: {
    fontSize: 16,
    fontWeight: '600',
    // marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  }

});
