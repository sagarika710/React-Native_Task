import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const doctorsDivsLayout = (props) => {
    return (
        <View >
            <View style={styles.rows}>
                <View style={styles.div1}>
                    <View style={styles.div1ImgDiv}>
                        <Image source={require('../assets/doctor1.png')} style={styles.div1Img} />
                    </View>
                    <View style={styles.div1Txt}>
                        <Text style={styles.nameTxt}>{props.data.name}</Text>
                        <Text style={styles.professionTxt}>{props.data.profession}</Text>
                        <View style={styles.rateReviewDiv}>
                            <Text style={styles.rateTxt}>{props.data.rate}</Text>
                            <Text style={styles.reviewTxt}>({props.data.reviews})</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.div1}>
                    <View style={styles.div1ImgDiv}>
                        <Image source={require('../assets/doctor2.png')} style={styles.div1Img} />
                    </View>
                    <View style={styles.div1Txt}>
                        <Text style={styles.nameTxt}>{props.data.name}</Text>
                        <Text style={styles.professionTxt}>{props.data.profession}</Text>
                        <View style={styles.rateReviewDiv}>
                            <Text style={styles.rateTxt}>{props.data.rate}</Text>
                            <Text style={styles.reviewTxt}>({props.data.reviews})</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    div1: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        // padding: 5,
    },
    div1ImgDiv: {
        padding: 15,
        alignItems:'center',
        
    },
    div1Img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'lightgray',
        margin: 5,
    },
    div1Txt: {
        paddingVertical: 10,
        paddingHorizontal: 35,
    },
    nameTxt: {
        textAlign: 'center',
        fontSize: 15,
    },
    professionTxt: {
        textAlign: 'center',
        fontSize: 12,
        color: '#666',
        marginVertical: 4,
    },
    rateReviewDiv: {
        justifyContent: 'center',
         flexDirection: 'row',
    },
    rateTxt: {
        fontSize: 10,
        color: 'green',
        marginHorizontal: 3,
    },
    reviewTxt: {
        fontSize: 10,
        color: 'green',
    }
})

export default doctorsDivsLayout;
