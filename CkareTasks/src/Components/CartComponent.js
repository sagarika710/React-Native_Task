import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Cart_Component() {
    const navigation = useNavigation();
    return (

        <View style={styles.firstrow}>
            <View style={styles.firstrowLeftDiv}>
                <View>
                    <AntDesign name="left" size={20} color="#666" style={styles.leftIcon} onPress={() => navigation.navigate('Medicine3ByCategory')} />
                </View>
                <View>
                    <Text style={styles.medicineTxt}>Cart</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    firstrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    firstrowLeftDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftIcon: {
        backgroundColor: '#EFF3FA',
        padding: 10,
        marginRight: 20,
        // marginVertical: 15,
        borderRadius: 30,
    },
    medicineTxt: {
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.300349,
        color: '#222B45',
    },
}
)