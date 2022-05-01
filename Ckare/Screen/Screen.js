import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Screen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('../assets/mediimg.png')} />
      <View style={styles.v1}>
        <View style={styles.r1}>
          <Text style={styles.txt}>Apollo Medicine Store</Text>
        </View>
        <View style={styles.r2}>
          <Image style={styles.img1} source={require('../assets/Vector.png')} />
          <Text style={styles.txt2} onPress= {() => navigation.navigate('Screen1')}>Get Direction</Text>
        </View>
      </View>
      <View style={styles.txt1}>
        <Text style={styles.add}>Nandan Vihar,Patia, Bhubaneswar,</Text>
        <Text style={styles.add}>Pincode-751024</Text>
        <Text style={styles.star}>⭐️ 4.5 (135 reviews)</Text>
      </View>
      <Text style={styles.shop}>Shop By Category</Text>
      <View  style={styles.Row1}>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/soap.png')} />
        <View style={styles.Text}>
        <Text style={styles.text}>    Covid</Text>
        <Text style={styles.text}>Essentials</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/babycare.png')} />
        <View style={styles.Text1}>
        <Text style={styles.text1}>Baby & Mom</Text>
        <Text style={styles.text1}>       Care</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/horlicks.png')} />
        <View style={styles.Text2}>
        <Text style={styles.text2}>Healthy Food &</Text>
        <Text style={styles.text2}>      Drinks</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/sensodyne.png')} />
        <View style={styles.Text3}>
        <Text style={styles.text3}>Personal Care</Text>
        </View>        
        </View>
      </View>
      <View  style={styles.Row2}>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/soap.png')} />
        <View style={styles.Text}>
        <Text style={styles.text}>    Covid</Text>
        <Text style={styles.text}>Essentials</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/babycare.png')} />
        <View style={styles.Text1}>
        <Text style={styles.text1}>Baby & Mom</Text>
        <Text style={styles.text1}>       Care</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/horlicks.png')} />
        <View style={styles.Text2}>
        <Text style={styles.text2}>Healthy Food &</Text>
        <Text style={styles.text2}>      Drinks</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/sensodyne.png')} />
        <View style={styles.Text3}>
        <Text style={styles.text3}>Personal Care</Text>
        </View>        
        </View>
      </View>
      <View  style={styles.Row3}>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/soap.png')} />
        <View style={styles.Text}>
        <Text style={styles.text}>    Covid</Text>
        <Text style={styles.text}>Essentials</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/babycare.png')} />
        <View style={styles.Text1}>
        <Text style={styles.text1}>Baby & Mom</Text>
        <Text style={styles.text1}>       Care</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/horlicks.png')} />
        <View style={styles.Text2}>
        <Text style={styles.text2}>Healthy Food &</Text>
        <Text style={styles.text2}>      Drinks</Text>
        </View>        
        </View>
        <View style={styles.Box}>
        <Image style={styles.img2} source={require('../assets/sensodyne.png')} />
        <View style={styles.Text3}>
        <Text style={styles.text3}>Personal Care</Text>
        </View>        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
  },
  Row1: {
   flexDirection: 'row',
  },
  Row2: {
    flexDirection: 'row',
   },
   Row3: {
    flexDirection: 'row',
    marginBottom: 50,
   },
  img2: {
   marginLeft: 12,
   marginTop: 15,
  },
  text: {
    fontSize: 7,
    marginLeft: 20,
    color: 'black',
  },
  text1: {
    fontSize: 7,
    marginLeft: 20,
    color: 'black',
  },
  text2: {
    fontSize: 7,
    marginLeft: 20,
    color: 'black',
  },
  text3: {
    fontSize: 7,
    marginLeft: 20,
    color: 'black',
  },
  Text: {
   marginTop: 10,
  },
  Text1: {
    marginTop: 18,
   },
   Text2: {
    marginTop: 22,
   },
   Text3: {
    marginTop: 13,
   },

  Box: {
    borderColor:  '#E1E1E1',
    borderWidth: 1,
    width: 90,
    marginTop: 5,
    marginLeft: 10,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
  },
    star: {
        marginTop: 10,
    },
    add: {
        fontSize: 11,
        color: 'black',
    },
  shop: {
    marginLeft: 15,
    marginTop: 20,
    paddingBottom: 15,
    fontSize: 17,
    color: 'black',
  },
  img1: {
    padding: 5,
    marginTop: 30,
    marginLeft: 140,
  },
  txt2: {
    color: '#009987',
    fontSize: 10,
    fontWeight: 'bold',
    // paddingTop: 20,
    // paddingBottom: 2,
    marginLeft: 110,
  },
  r2: {
    justifyContent: 'space-evenly',
  },
  v1: {
    flexDirection: 'row',
  },
  img: {
    marginLeft: 15,
    marginTop: 50,
    flexDirection: 'row',
    borderRadius: 5,
    width: 385,
  },
  txt: {
    color: '#009987',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    // paddingBottom: 2,
    marginLeft: 15,
  },
  txt1: {
    marginTop: 5,
    color: 'black',
    marginLeft: 17,
  },
});

export default Screen;
