import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';


export default function AmbulanceOrder5({navigation}) {

    return (

        <LinearGradient colors={['#009987', '#00E0C5']} style={styles.container}>
            <View style={{ justifyContent: 'space-between' }}>

                {/* first row */}
                <View style={styles.firstrow} >
                    <View>
                        <AntDesign name="left" size={20} color="#666" style={styles.leftIcon} onPress={() => navigation.navigate('AmbulanceOrder4')} />
                    </View>
                </View >

                {/* bottom div */}
                <View style={{ height: Dimensions.get('window').height * 0.15 }}></View>
                <View style={styles.whiteMainDiv}>
                    <View style={styles.whiteDiv}>
                        <View style={styles.ambulanceImgMainDiv}>
                            <View style={styles.ambulanceImgDiv}>
                                <Image source={require('../assets/ambulanceImg.jpg')} style={styles.ambulanceImg} />
                            </View>
                        </View>
                        <View style={styles.ckareAmbulanceTxtDiv}>
                            <Text style={styles.ckareAmbulanceTxt}>Ckare Ambulance Service</Text>
                        </View>
                        <View style={styles.fiveStarDiv}>
                            <View>
                                <AntDesign name="star" size={10} color="#FBBC05" />
                            </View>
                            <View>
                                <AntDesign name="star" size={10} color="#FBBC05" />
                            </View>
                            <View>
                                <AntDesign name="star" size={10} color="#FBBC05" />
                            </View>
                            <View>
                                <AntDesign name="star" size={10} color="#FBBC05" />
                            </View>
                            <View>
                                <AntDesign name="star" size={10} color="#FBBC05" />
                            </View>
                        </View>
                        <View style={styles.rateYourTripTxtDiv}>
                            <Text style={styles.rateYourTripTxt}>Rate Your Trip</Text>
                        </View>
                        <View style={styles.fourStarDiv}>
                            <TouchableOpacity>
                                <AntDesign name="star" size={30} color="#FBBC05" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="star" size={30} color="#FBBC05" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="star" size={30} color="#FBBC05" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="star" size={30} color="#FBBC05" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="star" size={30} color="#C4C4C4" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.giveFeedbackTxtDiv}>
                            <Text style={styles.giveFeedbackTxt}>Give Feedback</Text>
                        </View>
                        <View>
                            <TextInput multiline={true} numberOfLines={4} style={styles.writeFeedbackDiv} placeholder='Write Feedback.' />
                        </View>

                        {/* button */}
                        <View style={{ alignItems: 'center' }}>
                            <LinearGradient colors={['#00E0C5', '#009987']} style={styles.takeFreeTrialBtnDiv} >
                                <TouchableOpacity style={styles.takeFreeTrialBtn} onPress={() => navigation.navigate('Refer')}>
                                    <Text style={styles.takeFreeTrialBtnTxt} >Submit</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>

            </View>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
    },
    // first row
    firstrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    leftIcon: {
        backgroundColor: '#EFF3FA',
        padding: 10,
        marginRight: 20,
        // marginVertical: 15,
        borderRadius: 30,
    },
    whiteMainDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteDiv: {
        height: Dimensions.get('window').height * 0.76,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    ambulanceImgMainDiv : {
        position: 'absolute',
        top: -45,
        left: 160,
    },
    ambulanceImgDiv: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: 90,
        height: 90,
        borderWidth: 5,
        borderRadius: 50,
        borderColor: '#00E0C5',
    },
    ambulanceImg: {
        width: 50,
        height: 35
    },
    ckareAmbulanceTxtDiv: {
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ckareAmbulanceTxt: {
        color: '#030919',
        fontSize: 14,
        fontWeight: '700',
    },
    fiveStarDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    rateYourTripTxtDiv: {
        // marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rateYourTripTxt: {
        color: '#030919',
        fontSize: 16,
        fontWeight: '700',
    },
    fourStarDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    giveFeedbackTxtDiv: {
        // marginTop: 30,
        marginBottom: 10,
        justifyContent: 'flex-start',
    },
    giveFeedbackTxt: {
        color: '#030919',
        fontSize: 16,
        fontWeight: '700',
    },
    writeFeedbackDiv: {
        marginBottom: 10,
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.2,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        padding: 5,
        textAlignVertical: 'top'
    },
    // button
    takeFreeTrialBtnDiv: {
        width: 356,
        padding: 5,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    takeFreeTrialBtn: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    takeFreeTrialBtnTxt: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10,
        color: '#fff',
        // textShadowOffset: 5,
    },

})