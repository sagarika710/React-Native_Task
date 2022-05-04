import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SearchBar() {
    const navigation = useNavigation();
    return (
        <View >
            {/* First Row */}
            <View style={styles.firstrow}>
                <View style={styles.firstrowLeftDiv}>
                    <View>
                        <AntDesign name="left" size={20} color="#666" style={styles.leftIcon} onPress={() => navigation.navigate('Medicine1ByCategory')} />
                    </View>
                    <View>
                        <Text style={styles.medicineTxt}>Medicines</Text>
                    </View>
                </View>
                <View style={styles.firstrowRightDiv}>
                    <SimpleLineIcons name="basket" size={25} color="#009987" style={styles.basketIcon} />
                </View>
            </View>

            {/* Second Row */}
            <View style={styles.secondRowDiv}>
                <View style={styles.secondRowTxtInputDiv}>
                   <TextInput placeholder='Search Medicines & Health Product' />
                </View>
                <View>
                   <AntDesign name="search1" size={20} color="#666" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     paddingLeft: 20,
    //     paddingTop: 30,
    // },
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
    basketIcon: {
        padding: 10,
        // marginHorizontal: 20,
        // marginVertical: 10,
        borderRadius: 30,
    },
    secondRowDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // marginRight: 20,
        backgroundColor: '#EFF3FA',
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#EFF3FA',
    },


})