import * as React from 'react';
import { View, Text,Image,Dimensions,TextInput,StyleSheet } from 'react-native';


const Screen1  = () => {
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
          <View style={styles.img2}><Image  source={require('../assets/lifecare1.png')}/></View>
          </View>
          <View style={styles.row2}>
          <View style={styles.img2}><Image source={require('../assets/shriram1.png')}/></View>
          </View>
          </View>
          <View style={styles.Row1}>
          <View style={styles.row1}>
          <View style={styles.img2}><Image  source={require('../assets/lifecare1.png')}/></View>
          </View>
          <View style={styles.row2}>
          <View style={styles.img2}><Image source={require('../assets/shriram1.png')}/></View>
          </View>
          </View>
          <View style={styles.Row2}>
          <View style={styles.row1}>
          <View style={styles.img2}><Image  source={require('../assets/lifecare1.png')}/></View>
          </View>
          <View style={styles.row2}>
          <View style={styles.img2} ><Image  source={require('../assets/shriram1.png')}/></View>
          </View>
          </View>
        </View>
    )
};
const styles = StyleSheet.create({
    img2: {
     alignItems: 'center',
    },
    row1: {
     borderWidth: 1,
     width: Dimensions.get('window').width*0.45,
     borderColor:  '#E1E1E1',
     borderRadius: 10,

    },
    row2: {
        borderWidth: 1,
        width: Dimensions.get('window').width*0.45,
        marginLeft: 10,
        borderColor:  '#E1E1E1',
        borderRadius: 10,
       },

    Row: {
        marginLeft: 15,
        alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('window').width*0.9
    },
    Row1: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 8,
      },
      Row2: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
      },
       search: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EFF3FA',
        borderRadius: 15,
        backgroundColor: '#EFF3FA',
        paddingRight: 10,
        paddingLeft: 10,
        margin: 15,
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: Dimensions.get('window').width*0.925,
    },
    img1: {
        height: 22,
    },
    heading: {
        marginHorizontal: 60,
        marginVertical: 10,
        color: 'black',
        fontSize: 15,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    location: {
        marginLeft: 15,
        marginVertical: 18,
        color: '#009987',
    }
})

export default Screen1;
