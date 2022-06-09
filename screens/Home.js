import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("CryptoDetail")}
            >
                <Text>Navigate to CryptoDetail</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;