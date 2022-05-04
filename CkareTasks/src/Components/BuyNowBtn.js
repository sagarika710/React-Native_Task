import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import Medicine2ByCategory from '../Screens/Medicine2ByCategory';
import { useNavigation } from '@react-navigation/native';

export default function BuyNowBtn() {
    const navigation = useNavigation();
    return (
        <View >
            
            <TouchableOpacity >
            <LinearGradient colors={['#00E0C5', '#009987']} style={styles.buyNowBtnDiv} >
                    <Text style={styles.buyNowBtn} onPress={() => navigation.navigate('Medicine2ByCategory')}>Buy Now</Text>
                    </LinearGradient>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    buyNowBtnDiv: {
        width: 144,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 15,
        // paddingHorizontal: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        marginTop: 10,
    },
    buyNowBtn: {
        fontSize: 10,
        fontWeight: '600',
        color: '#ffffff',
    }
})