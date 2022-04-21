import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Touchable, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* serach bar */}
      <TouchableOpacity>
        <View style={styles.searchbar}>
          <View>
            <TextInput placeholder='Search' />
          </View>
          <View>
            <Image source={require('./assets/searchIcon.png')} style={styles.searchIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* vaccine div */}
        <View style={styles.vaccineDiv}>
          {/* <ImageBackground source={require('./assets/blueBackgnd.jpg')} style={styles.blueBackgndImg}> */}
          <View>
            <Text style={styles.antaledoTxt}>ANTALEDO CITY HOSPITAL</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 30, }}>
              <Text style={styles.covid19Txt}>COVID-19</Text>
              <Text style={styles.vaccineTxt}>Vaccine Drive</Text>
              <Text style={styles.dayTxt}>Monday to Saturday</Text>
              <Text style={styles.timeTxt}>9 AM  to  5 PM</Text>
            </View>
            <View>
              <Image source={require('./assets/vaccine.jpg')} style={styles.vaccineImg} />
            </View>
          </View>
          {/* </ImageBackground> */}
        </View>

        {/* cartoon image div */}
        <View style={styles.cartoonImgDivs}>
          <View>
            <View style={styles.medicineImgDiv}>
              <Image source={require('./assets/medicinesCartoon.jpg')} style={styles.medicineImg} />
            </View>
            <View>
              <Text style={styles.medicineTxt}>Medicine</Text>
            </View>
          </View>
          <View>
            <View style={styles.medicineImgDiv}>
              <Image source={require('./assets/patholabCartoon.jpg')} style={styles.medicineImg} />
            </View>
            <View>
              <Text style={styles.medicineTxt}>Patholab</Text>
            </View>
          </View>
          <View>
            <View style={styles.medicineImgDiv}>
              <Image source={require('./assets/doctorCartoon.jpg')} style={styles.medicineImg} />
            </View>
            <View>
              <Text style={styles.medicineTxt}>Doctor</Text>
            </View>
          </View>
          <View>
            <View style={styles.medicineImgDiv}>
              <Image source={require('./assets/clinicCartoon.jpg')} style={styles.medicineImg} />
            </View>
            <View>
              <Text style={styles.medicineTxt}>Clinics</Text>
            </View>
          </View>
        </View>

        {/* doctors near by you */}
        <View style={styles.doctorsNearByYouDiv}>
          <View>
            <Text style={styles.doctorsNearByYouTxt}>Doctors Near By You</Text>
          </View>
          <View>
            <Text style={styles.rightarrowSymbol}> {'>'} </Text>
          </View>
        </View>

        {/* doctor divs */}
        <View style={{ marginBottom: 20, }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.doctorDiv1}>
              <View style={styles.doctorImgDiv}>
                <Image source={require('./assets/doctor1.png')} style={styles.doctorImg} />
              </View>
              <View style={styles.doctorTxtDiv}>
                <Text style={styles.KateRoseTxt}>Dr. Kate Rose</Text>
                <Text style={styles.PediatricianTxt}>Pediatrician</Text>
              </View>
            </View>
            <View style={styles.doctorDiv1}>
              <View style={styles.doctorImgDiv}>
                <Image source={require('./assets/doctor2.png')} style={styles.doctorImg} />
              </View>
              <View style={styles.doctorTxtDiv}>
                <Text style={styles.KateRoseTxt}>Dr. Kayle Bush</Text>
                <Text style={styles.PediatricianTxt}>Cadiologist</Text>
              </View>
            </View>
            <View style={styles.doctorDiv1}>
              <View style={styles.doctorImgDiv}>
                <Image source={require('./assets/doctor1.png')} style={styles.doctorImg} />
              </View>
              <View style={styles.doctorTxtDiv}>
                <Text style={styles.KateRoseTxt}>Dr. Kate Rose</Text>
                <Text style={styles.PediatricianTxt}>Pediatrician</Text>
              </View>
            </View>
            <View style={styles.doctorDiv1}>
              <View style={styles.doctorImgDiv}>
                <Image source={require('./assets/doctor2.png')} style={styles.doctorImg} />
              </View>
              <View style={styles.doctorTxtDiv}>
                <Text style={styles.KateRoseTxt}>Dr. Kayle Bush</Text>
                <Text style={styles.PediatricianTxt}>Cadiologist</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* clinics near by you */}
        <View style={styles.doctorsNearByYouDiv}>
          <View>
            <Text style={styles.doctorsNearByYouTxt}>Clinics Near By You</Text>
          </View>
          <View>
            <Text style={styles.rightarrowSymbol}> {'>'} </Text>
          </View>
        </View>

        {/* clinics divs */}
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.clinicDiv1}>
              <View style={styles.clinicImgDiv}>
                <Image source={require('./assets/clinicImg.jpeg')} style={styles.clinicImg} />
              </View>
              <View style={styles.clinicTxtDiv}>
                <Text style={styles.HomeopatheiticClinicTxt}>Homeopathetic Clinic</Text>
                <Text style={styles.NandanViharTxt}>Nandan Vihar, Patia</Text>
              </View>
            </View>
            <View style={styles.clinicDiv1}>
              <View style={styles.clinicImgDiv}>
                <Image source={require('./assets/clinicImg.jpeg')} style={styles.clinicImg} />
              </View>
              <View style={styles.clinicTxtDiv}>
                <Text style={styles.HomeopatheiticClinicTxt}>Homeopathetic Clinic</Text>
                <Text style={styles.NandanViharTxt}>Nandan Vihar, Patia</Text>
              </View>
            </View>
            <View style={styles.clinicDiv1}>
              <View style={styles.clinicImgDiv}>
                <Image source={require('./assets/clinicImg.jpeg')} style={styles.clinicImg} />
              </View>
              <View style={styles.clinicTxtDiv}>
                <Text style={styles.HomeopatheiticClinicTxt}>Homeopathetic Clinic</Text>
                <Text style={styles.NandanViharTxt}>Nandan Vihar, Patia</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* patholabs near by you */}
        <View style={styles.doctorsNearByYouDiv}>
          <View>
            <Text style={styles.doctorsNearByYouTxt}>Patholabs Near By You</Text>
          </View>
          <View>
            <Text style={styles.rightarrowSymbol}> {'>'} </Text>
          </View>
        </View>

        {/* patholabs near by you divs*/}
        <View style={styles.patholabsNearByYouDiv}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/lifecare.jpg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}> 
              <Image source={require('./assets/lifecare.jpg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/lifecare.jpg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/lifecare.jpg')} style={styles.lifecareImg}/>
            </View>
          </ScrollView>
        </View>

        {/* medicine stores near by you */}
        <View style={styles.doctorsNearByYouDiv}>
          <View>
            <Text style={styles.doctorsNearByYouTxt}>Medicine Stores Near By You</Text>
          </View>
          <View>
            <Text style={styles.rightarrowSymbol}> {'>'} </Text>
          </View>
        </View>

        {/* medicine stores near by you divs*/}
        <View  style={styles.patholabsNearByYouDiv}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/clinicImg.jpeg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}> 
              <Image source={require('./assets/clinicImg.jpeg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/clinicImg.jpeg')} style={styles.lifecareImg}/>
            </View>
            <View style={styles.lifecareImgDiv}>
              <Image source={require('./assets/clinicImg.jpeg')} style={styles.lifecareImg}/>
            </View>
          </ScrollView>
        </View>
     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 15,
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },

  // vaccine div
  vaccineDiv: {
    backgroundColor: '#0818A8',
    borderRadius: 10,
    // marginBottom: 15,
  },
  antaledoTxt: {
    fontSize: 8,
    fontWeight: '800',
    color: '#8AC7DB',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  vaccineImg: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  covid19Txt: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
    marginTop: 20,
  },
  vaccineTxt: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
    // marginHorizontal: 10,
  },
  dayTxt: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#8AC7DB',
    // marginHorizontal: 5,
    marginVertical: 5,
    // textAlign: 'center',
  },
  timeTxt: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#8AC7DB',
    // marginHorizontal: 5,
    marginVertical: 5,
    // textAlign: 'center',
  },

  // cartoon image divs
  cartoonImgDivs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  medicineImgDiv: {
    backgroundColor: '#66FF00',
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicineImg: {
    width: 50,
    height: 50,
  },
  medicineTxt: {
    fontSize: 13,
    color: '#01A368',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // doctors near by you
  doctorsNearByYouDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  doctorsNearByYouTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  rightarrowSymbol: {
    fontSize: 24,
    color: '#01A368',
  },

  //  doctor divs
  doctorDiv1: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 10,
    // justifyContent: 'space-around',
    width: 150,
    height: 210,
    marginEnd: 10,
  },
  doctorImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01A368',
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  doctorImg: {
    width: 110,
    height: 110,
  },
  doctorTxtDiv: {
    padding: 5,

  },
  KateRoseTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  PediatricianTxt: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#01A368',
    padding: 3,
    textAlign: 'center',
  },

  // clinic divs
  clinicDiv1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 0,
    marginEnd: 15,
    marginBottom: 20,
  },
  clinicImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clinicImg: {
    width: 165,
    height: 120,
    borderRadius: 10,
  },
  clinicTxtDiv: {
    borderTopWidth: 1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  HomeopatheiticClinicTxt: {
    fontSize: 12,
    color: '#01A368',
  },
  NandanViharTxt: {
    fontSize: 10,
    color: '#666',
  },

  // pathology labs near you divs
  patholabsNearByYouDiv: {
    marginBottom: 15,
  },
  lifecareImgDiv: {
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lifecareImg: {
    width: 165,
    height: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  }


});
