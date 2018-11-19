import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default AvatarSection = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}/>
                <Text style={styles.headerTitle}>Avatar</Text>
            </View>
            <View style={styles.body}>
                <Image source={{url: props.image}} style={styles.avatar} />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Avatars')}>
                        <Text style={{ textAlign: 'center' }}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        fontSize: 20,
        marginRight: 10
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    body: {
        flexDirection: 'row',
    },
    avatar: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginRight: 50
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 70,
        padding: 5,
        marginBottom: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        borderRadius: 3
    }
});