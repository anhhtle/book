import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default goBackHeader = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>

            <TouchableOpacity style={styles.backIconContainer} onPress={() => props.navigation.goBack() }>
                <Ionicons style={styles.backIcon} name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 65,
        backgroundColor: '#B1040E',
    },
    backIconContainer: {
        position: 'absolute',
        top: 20,
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