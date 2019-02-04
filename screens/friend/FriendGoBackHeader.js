import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default FriendGoBackHeader = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>

            <TouchableOpacity style={styles.backIconContainer} onPress={() => props.destination ? props.navigation.navigate(props.destination) : props.navigation.goBack() }>
                <Ionicons style={styles.backIcon} name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 55,
        backgroundColor: '#0B4F6C',
    },
    backIconContainer: {
        position: 'absolute',
        top: 10,
        left: 5,
        width: 50,
        justifyContent: 'center'
    },
    backIcon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },

    headerTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20
    }
});