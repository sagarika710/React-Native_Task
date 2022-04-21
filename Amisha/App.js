//JIO DATA PACKS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, hr } from 'react-native';
import {Ionicons} from '@expo/vector-icons/Ionicons';

const jioPack = () => {
 return(
   <View style={styles.v1}>
     <View style={styles.v2}>
       <Text style={styles.t1}>Data Add-On Packs</Text>
     </View>
     <View style={styles.v3}>
       <Text style={styles.plan}>PLAN</Text>
       <Text style={styles.validity}>VALIDITY</Text>
       <Text style={styles.data}>DATA</Text>
       <Text style={styles.rupees}>₹181</Text>
       <Text style={styles.days}>30 days</Text>
       <Text style={styles.gb}>30 GB</Text>
       <Text style={styles.view}>View Details</Text>
       <Text style={styles.buy}>Buy</Text>
     </View>
     <View style={styles.v3}>
       <Text style={styles.plan}>PLAN</Text>
       <Text style={styles.validity}>VALIDITY</Text>
       <Text style={styles.data}>DATA</Text>
       <Text style={styles.rupees}>₹241</Text>
       <Text style={styles.days}>30 days</Text>
       <Text style={styles.gb}>40 GB</Text>
       <Text style={styles.view}>View Details</Text>
       <Text style={styles.buy}>Buy</Text>
     </View>
     <View style={styles.v3}>
       <Text style={styles.plan}>PLAN</Text>
       <Text style={styles.validity}>VALIDITY</Text>
       <Text style={styles.data}>DATA</Text>
       <Text style={styles.rupees}>₹301</Text>
       <Text style={styles.days}>30 days</Text>
       <Text style={styles.gb}>50 GB</Text>
       <Text style={styles.view}>View Details</Text>
       <Text style={styles.buy}>Buy</Text>
     </View>
     <View style={styles.v3}>
       <Text style={styles.plan}>PLAN</Text>
       <Text style={styles.validity}>VALIDITY</Text>
       <Text style={styles.data}>DATA</Text>
       <Text style={styles.rupees}>₹555</Text>
       <Text style={styles.days}>55 days</Text>
       <Text style={styles.gb}>55 GB</Text>
       <Text style={styles.view}>View Details</Text>
       <Text style={styles.buy}>Buy</Text>
       <Text style={styles.dataAddOnPack}>DATA ADD-ON PACK</Text>
       <Text style={styles.subscriptions}>SUBSCRIPTIONS</Text>
     </View>
     <View style={styles.v3}>
       <Text style={styles.plan}>PLAN</Text>
       <Text style={styles.validity}>VALIDITY</Text>
       <Text style={styles.data}>DATA</Text>
       <Text style={styles.rupees}>₹2878</Text>
       <Text style={styles.days}>365 days</Text>
       <Text style={styles.gb}>2 GB/day</Text><Text style={styles.view}>View Details</Text>
       <Text style={styles.buy}>Buy</Text>
     </View>
   </View>
 )
}

const styles = StyleSheet.create({
  v1: {
    marginTop: 30,
    backgroundColor: '#eef0f1',
  },
  v2: {
    marginTop: 12,
    marginLeft: 8,
    marginRight:8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 11,
    borderTopEndRadius: 11,
    height: 60,
    padding: 15,
    borderBottomWidth: 3,
    borderBottomColor:'#eef0f1',
  },
  t1: {
    fontWeight: "bold",
    fontSize: 16,
  },
  v3: {
    height: 150,
    marginLeft: 8,
    marginRight:8,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
    borderBottomWidth: 3,
    borderBottomColor:'#eef0f1',
  },
  
  plan: {
    color: "#808080",
    fontSize: 11,
  },
  validity: {
    color: "#808080",
    fontSize: 11,
    position: "relative",
    left: 90,
    bottom: 15,
  },
  data: {
    color: "#808080",
    fontSize: 11,
    position: "relative",
    left: 170,
    bottom: 30,
  },
  rupees: {
    fontSize: 24,
    color: "#FF0000",
    fontWeight: "bold",
    position: "relative",
    left: 0,
    bottom: 30,
  },
  days: {
    fontSize: 11,
    position: "relative",
    left: 95,
    bottom: 50,
  },
  gb: {
    fontSize: 11,
    position: "relative",
    left: 170,
    bottom: 65,
  },
  view: {
    color: "#00008B",
    fontSize: 12,
    fontWeight: "bold",
    position: "relative",
    left: 0,
    bottom: 35,
  },
  buy: {
    color: "#fff",
    fontWeight: "bold",
    borderColor: "#0000FF",
    borderWidth: 1,
    borderRadius: 7,
    width: 90,
    backgroundColor: "#00008B",
    padding: 7,
    paddingLeft: 30,
    position: "relative",
    left: 260,
    bottom: 60,
  },
  dataAddOnPack: {
    color: "#fff",
    backgroundColor: "#FFD700",
    width: 95,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#FFD700",
    fontSize: 8,
    fontWeight: 'bold',
    paddingLeft: 5,
    position: "relative",
    left: 0,
    bottom: 188,
    right: 20,
  },
  subscriptions: {
    color: "#808080",
    fontSize: 11,
    position: "relative",
    left: 240,
    bottom: 188,
  }
});

export default jioPack;