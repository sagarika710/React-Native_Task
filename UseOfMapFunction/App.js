import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DoctorsComponent from './Components/DoctorsComponent';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const doctors_Screen = () => {
  var DoctorsData1 = [
    {
      // url: './assets/doctor1.png',
      name: 'Dr. Bellamy N',
      profession: 'Viralogist',
      rate: 4.5,
      reviews: '135 reviews',
    },
    {
      // url: './assets/doctor2.png',
      name: 'Dr. Bellamy N',
      profession: 'Pediatrician',
      rate: 4.1,
      reviews: '135 reviews',
    },
    {
      // url: './assets/doctor2.png',
      name: 'Dr. Bellamy N',
      profession: 'Surgeon',
      rate: 4.0,
      reviews: '130 reviews',
    },
    {
      // url: './assets/doctor1.png',
      name: 'Dr. Bellamy N',
      profession: 'Oncologist',
      rate: 4.8,
      reviews: '135 reviews',
    },
  ]

  var DoctorsData2 = [
    {
      // url: './assets/doctor1.png',
      name: 'Dr. Bellamy N',
      profession: 'Rheumatologist',
      rate: 5,
      reviews: '124 reviews',
    },
    {
      // url: './assets/doctor2.png',
      name: 'Dr. Bellamy N',
      profession: 'Radiologist',
      rate: 4.8,
      reviews: '140 reviews',
    },
    {
      // url: './assets/doctor2.png',
      name: 'Dr. Bellamy N',
      profession: 'Viralogist',
      rate: 4.5,
      reviews: '135 reviews',
    },
    {
      // url: './assets/doctor1.png',
      name: 'Dr. Bellamy N',
      profession: 'Viralogist',
      rate: 4.5,
      reviews: '135 reviews',
    },
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.firstrow}>
          <AntDesign name="left" size={14} color="#666" style={styles.leftIcon} />
          <Text style={styles.DoctorsTxt}>Doctors</Text>
        </View>
        <View style={styles.secondRow}>
          <Ionicons name="location-outline" size={16} color="green" style={styles.locationIcon} />
          <Text style={styles.PatiaTxt}>Patia, Bhubaneswar</Text>
        </View>
        {
          DoctorsData1.map((Data1) => {
            return(
              <DoctorsComponent data= {Data1} />
            )
          })
        }
         {
          DoctorsData2.map((Data2) => {
            return(
              <DoctorsComponent data= {Data2} />
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 25,
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  leftIcon: {
    backgroundColor: '#DADBDD',
    padding: 5,
    borderRadius: 30,
  },
  DoctorsTxt: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginVertical: 15,
  },
  locationIcon: {
    marginLeft: 10,
  },
  PatiaTxt: {
    fontSize: 13,
    color: 'green',
    marginHorizontal: 10,
  }

});

export default doctors_Screen;