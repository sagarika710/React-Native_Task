import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import BuyNowBtn from './BuyNowBtn';

export default function Medicines_Data(props) {
    return(
        <View style={styles.mainDiv}>
            <View style={styles.rows}>
                <View style={styles.oneDiv}>
                    <View style={styles.ImgDiv}>
                        <Image source={props.data.url} />
                    </View>
                    <View style={styles.TxtDiv}>
                         <Text style={styles.nameTxt}>{props.data.name}</Text>
                         <View style={styles.priceDiv}>
                            <Text style={styles.priceTxt}>{props.data.price}</Text>
                            <Text style={styles.originalPriceTxt}>{props.data.originalPrice}</Text>
                            <Text style={styles.offerTxt}>{props.data.offer}</Text>
                         </View>
                         <View style={styles.starDiv}>
                             <AntDesign name="star" size={13} color="#FBBC05" />
                             <AntDesign name="star" size={13} color="#FBBC05" />
                             <AntDesign name="star" size={13} color="#FBBC05" />
                             <AntDesign name="star" size={13} color="#FBBC05" />
                             <AntDesign name="star" size={13} color="#FBBC05" />
                         </View>
                         <View>
                             <BuyNowBtn onPress={ () => navigation.navigate('Medicine2ByCategory')} />
                         </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    mainDiv: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rows: {
        marginTop: 15,
    },
    oneDiv: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        width: 170,
        height: 190,
        marginRight: 5,
        // marginBottom: 10,
        marginHorizontal: 8,
    },
    ImgDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    TxtDiv: {
        justifyContent: 'flex-start',
    },
    nameTxt: {
        color: '#222222',
        letterSpacing: 0.3,
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5,
    },
    priceDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    priceTxt: {
        color: '#000',
        letterSpacing: 0.3,
        fontSize: 12,
        fontWeight: '500',
        marginRight: 4,
        marginBottom: 5,
    },
    originalPriceTxt: {
        color: '#000',
        letterSpacing: 0.3,
        fontSize: 12,
        fontWeight: '500',
        marginRight: 4,
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    offerTxt: {
        color: '#009987',
        letterSpacing: 0.3,
        fontSize: 12,
        fontWeight: '500',
        marginRight: 4,
        marginBottom: 5,
    },
    starDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

})