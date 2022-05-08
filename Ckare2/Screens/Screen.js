import React from 'react';
import {View, Image, Text,ScrollView, StyleSheet,Dimensions} from 'react-native';

const Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center',width: Dimensions.get('window').width*1}}>
        <Image style={styles.img} source={require('../assets/mediimg.png')} />
      </View>

      <View style={styles.v1}>
        <View style={styles.r1}>
          <Text style={styles.txt}>Apollo Medicine Store</Text>
        </View>
        <View style={styles.r2}>
          <Image style={styles.img1} source={require('../assets/Vector.png')} />
          <Text
            style={styles.txt2}
            onPress={() => navigation.navigate('Screen1')}>
            Get Direction
          </Text>
        </View>
      </View>
      <View style={styles.txt1}>
        <Text style={styles.add}>Nandan Vihar,Patia, Bhubaneswar,</Text>
        <Text style={styles.add}>Pincode-751024</Text>
        <Text style={styles.star}>⭐️ 4.5 (135 reviews)</Text>
      </View>
      <View style={{alignItems: 'flex-start',height: Dimensions.get('window').height*0.05}}><Text style={styles.shop}>Shop By Category</Text></View>
      <View  style={{width: Dimensions.get('window').width*0.8, marginLeft: 15,}}>
      <View style={styles.Row1}>
        <View style={styles.Box}>
          <Image style={styles.img3} source={require('../assets/soap.png')} />
          <View style={styles.Text}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text}> Covid</Text>
            </View>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text}>Essentials</Text>
            </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/babycare.png')}
          />
          <View style={styles.Text1}>
            <View style={{alignItems: 'center',}}>
              <Text style={styles.text1}>Baby & Mom</Text>
              </View>
            <View style={{alignItems: 'center',}}>
              <Text style={styles.text1}> Care</Text>
              </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/horlicks.png')}
          />
          <View style={styles.Text2}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text2}>Healthy Food &</Text>
            </View>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text2}> Drinks</Text>
            </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/sensodyne.png')}
          />
          <View style={styles.Text3}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text3}>Personal Care</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Row2}>
        <View style={styles.Box}>
          <Image style={styles.img3} source={require('../assets/soap.png')} />
          <View style={styles.Text}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text}> Covid</Text>
            </View> 
         <View style={{alignItems: 'center',}}>
           <Text style={styles.text}>Essentials</Text>
           </View> 
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/babycare.png')}
          />
          <View style={styles.Text1}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text1}>Baby & Mom</Text>
            </View>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text1}> Care</Text>
            </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/horlicks.png')}
          />
          <View style={styles.Text2}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text2}>Healthy Food &</Text>
            </View>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text2}> Drinks</Text>
            </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/sensodyne.png')}
          />
          <View style={styles.Text3}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text3}>Personal Care</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Row3}>
        <View style={styles.Box}>
          <Image style={styles.img3} source={require('../assets/soap.png')} />
          <View style={styles.Text}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text}> Covid</Text>
            </View>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text}>Essentials</Text>
            </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/babycare.png')}
          />
          <View style={styles.Text1}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text1}>Baby & Mom</Text>
            </View>
          <View style={{alignItems: 'center',}}>
             <Text style={styles.text1}> Care</Text>
             </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/horlicks.png')}
          />
          <View style={styles.Text2}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.text2}>Healthy Food &</Text>
            </View>
          <View style={{alignItems: 'center',}}>
             <Text style={styles.text2}> Drinks</Text>
             </View>
          </View>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.img2}
            source={require('../assets/sensodyne.png')}
          />
          <View style={styles.Text3}>
          <View style={{alignItems: 'center',}}>
             <Text style={styles.text3}>Personal Care</Text>
             </View>
          </View>
        </View>
      </View>
        </View>
        </ScrollView>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: Dimensions.get('window').height*0.18,
    // alignItems: 'center',
    // marginBottom: 10,
  },
  Row2: {
    flexDirection: 'row',
    // marginHorizontal: 14,
    justifyContent: 'space-between',
    // height: Dimensions.get('window').height*0.18,
    // alignItems: 'center',
    // marginBottom: 10,
  },
  Row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: Dimensions.get('window').height*0.18,
    // alignItems: 'center',
    // marginBottom: 50,
    // marginHorizontal: 14,
  },
  img2: {
    marginTop: 15,
  },
  img3: {
    marginTop: 15,
  },
  text: {
    fontSize: 7,
    color: 'black',
  },
  text1: {
    fontSize: 7,
    color: 'black',
  },
  text2: {
    fontSize: 7,
    color: 'black',
  },
  text3: {
    fontSize: 7,
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
    borderColor: '#E1E1E1',
    borderWidth: 1,
    // marginVertical: 3,
    width: 85,
    width: Dimensions.get('window').width*0.21,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    // marginHorizontal: 5,
    // justifyContent: 'space-between',
    height: 105,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  star: {
    marginVertical: 10,
  },
  add: {
    fontSize: 11,
    color: 'black',
  },
  shop: {
    marginLeft: 15,
    marginVertical: 5,
    fontSize: 17,
    color: 'black',
  },
  img1: {
    // padding: 5,
    marginTop: 30,
    // marginLeft: 140,

  },
  txt2: {
    color: '#009987',
    fontSize: 10,
    fontWeight: 'bold',
    // paddingTop: 20,
    // paddingBottom: 2,
    // marginLeft: 110,
  },
  r2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width*0.95
  },
  img: {
    // marginLeft: 20,
    // marginTop: 15,
    flexDirection: 'row',
    borderRadius: 5,
    // width: 385,
  },
  txt: {
    color: '#009987',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 18,
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
