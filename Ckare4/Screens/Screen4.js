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
import Icon from 'react-native-vector-icons/AntDesign';

const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <View >
          <Image onPress={() => navigation.navigate('Screen3')}  source={require('../assets/backicon2.png')} />
        </View>
      </View>

      <View style={styles.Date}>
          <Text style={styles.date}>July, 2020 <Icon name='caretdown' style={styles.downicon} size={12}/></Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <View style={styles.Row}>
          <View style={styles.col1}>
              <View><Text style={styles.num1}>13</Text></View>
              <View style={styles.Day1}><Text style={styles.day1}>MON</Text></View>
          </View>
          <TouchableOpacity>
        <LinearGradient style={styles.colcol} colors={['#00E0C5', '#009987']}>
          <View style={styles.col2}>
              <View><Text style={styles.num12}>14</Text></View>
              <View style={styles.Day1}><Text style={styles.day12}>TUE</Text></View>
          </View>
        </LinearGradient>
        </TouchableOpacity>
          <View style={styles.col1}>
              <View><Text style={styles.num1}>15</Text></View>
              <View style={styles.Day1}><Text style={styles.day1}>WED</Text></View>
          </View>
          <View style={styles.col1}>
              <View><Text style={styles.num1}>16</Text></View>
              <View style={styles.Day1}><Text style={styles.day1}>THUR</Text></View>
          </View>     
      </View>
      </View>

      <View><Text style={styles.Available}>Available Time</Text></View>

    
      <View style={{alignItems: 'center', justifyContent: 'space-between',}}>
        <View style={styles.Timetable}>
          <View style={styles.Time}><Text style={styles.time}>09.00 AM</Text></View>
          <View style={styles.Time}><Text style={styles.time}>09.30 AM</Text></View>
          <View style={styles.Time}><Text style={styles.time}>10.00 AM</Text></View>
        </View>
        <View style={styles.Timetable}>
          <View style={styles.Time}><Text style={styles.time}>12.00 AM</Text></View>
          <LinearGradient style={styles.Colcol} colors={['#00E0C5', '#009987']}>

          <View style={styles.Time}><Text style={styles.timex}>12.30 AM</Text></View>
          </LinearGradient>

          <View style={styles.Time}><Text style={styles.time}>01.00 AM</Text></View>
        </View>
        <View style={styles.Timetable}>
          <View style={styles.Time}><Text style={styles.time}>03.00 AM</Text></View>
          <View style={styles.Time}><Text style={styles.time}>04.30 AM</Text></View>
          <View style={styles.Time}><Text style={styles.time}>05.00 AM</Text></View>
        </View>
      </View>
      <View><Text style={styles.comment}>Write your problem</Text></View>

      <View style={styles.search}>
               <TextInput placeholder="Write your problem"></TextInput>
          </View>

      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={styles.btn1}
                onPress={() => navigation.navigate('Screen5')}>
                Proceed to Pay
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colcol: {
    borderRadius: 16,
    color: '#FFFFFF',
  },
  Colcol: {
    borderRadius: 8,
    color: '#FFFFFF',
  },
  search: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 10,
    backgroundColor: '#CDCDCD',
    paddingLeft: 10,
    margin: 15,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.22,
},
  comment: {
   marginLeft: 20,
   marginTop: 15,
   color: '#717171',
    fontSize: 12,
  },
  time: {
    color: '#717171',
    fontSize: 12,
  },
  timex: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  Timetable: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  Time: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.285,
    height: Dimensions.get('window').width * 0.08,
    borderColor: '#E1E1E1',
  },
  Available: {
    marginTop: 30,
    marginLeft: 20,
    color: '#000000',
  },
    Day1: {
       marginTop: 5,
    },
    day1: {
    fontSize: 12,
    color: '#717171',
    },
    day12: {
        fontSize: 12,
        color: '#FFFFFF',
        },
    num1: {
        fontSize: 25,
    color: '#000000',
        },
        num12: {
            fontSize: 25,
        color: '#FFFFFF',
            },
    Row: {
      flexDirection: 'row',
     width: Dimensions.get('window').width * 0.9,
     justifyContent: 'space-between',
     marginTop: 15,
    },
    col1: {
     borderWidth: 1,
     borderRadius: 17,
     width: Dimensions.get('window').width * 0.21,
    height: Dimensions.get('window').width * 0.24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E1E1E1',
    },
    col2: {
        borderWidth: 1,
        borderRadius: 17,
        width: Dimensions.get('window').width * 0.21,
       height: Dimensions.get('window').width * 0.24,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor: '#E1E1E1',

       },
    Heading: {
      marginTop: 15,
      marginLeft: 15,
    },
    container: {
        backgroundColor: '#FFFEFF',
        flex: 1,
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
  downicon: {
    color: '#000000',
  },
  Date: {
      marginLeft: 20,
      marginTop: 20,
  },
  date: {
    color: '#000000',
    
}
});

export default Screen4;
