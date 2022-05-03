import * as React from 'react';
import { View, Text,Image,TextInput,StyleSheet } from 'react-native';

const Screen1  = ( ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Patholabs</Text>
            <Text style={styles.location}>Patia, Bhubaneswar</Text>
            <View style={styles.search}>
               <TextInput placeholder="Search Patholabs"></TextInput>
          <Image style={styles.img1} source={require('../assets/search.png')}/>
          </View>
          <View style={styles.Row}>
          <View style={styles.row1}>
          <Image style={styles.img2} source={require('../assets/lifecare1.png')}/>
          </View>
          <View style={styles.row2}>
          <Image style={styles.img3} source={require('../assets/shriram1.png')}/>
          </View>
          </View>
          <View style={styles.Row1}>
          <View style={styles.row1}>
          <Image style={styles.img2} source={require('../assets/shriram1.png')}/>
          </View>
          <View style={styles.row2}>
          <Image style={styles.img3} source={require('../assets/lifecare1.png')}/>
          </View>
          </View>
          <View style={styles.Row1}>
          <View style={styles.row1}>
          <Image style={styles.img2} source={require('../assets/lifecare1.png')}/>
          </View>
          <View style={styles.row2}>
          <Image style={styles.img3} source={require('../assets/shriram1.png')}/>
          </View>
          </View>
        </View>
    )
};
const styles = StyleSheet.create({
    row1: {
     borderWidth: 1,
     width: 172,
     borderColor:  '#E1E1E1',
     borderRadius: 10,

    },
    row2: {
        borderWidth: 1,
        width: 172,
        marginLeft: 10,
        borderColor:  '#E1E1E1',
        borderRadius: 10,
       },

    Row: {
      flexDirection: 'row',
      marginLeft: 20,
      marginTop: 28,
    },
    Row1: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 18,
      },
    img3: {
     marginLeft: 10,
    },
    img2: {
        marginLeft: 7,
       },
    search: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EFF3FA',
        borderRadius: 15,
        width: 370,
        marginLeft: 18,
        marginTop: 20,
        backgroundColor: '#EFF3FA',
        paddingLeft: 10,
    },
    img1: {
        height: 22,
        marginTop: 14,
        marginLeft: 190,
    },
    heading: {
        marginLeft: 60,
        marginTop: 40,
        color: 'black',
        fontSize: 15,
    },
    container: {
        backgroundColor: 'white',
        height: 1000,
    },
    location: {
        marginLeft: 20,
        marginTop: 34,
        color: '#009987',
    }
})

export default Screen1;
