import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backIconContainer} onPress={() => this.props.navigation.goBack() }>
                    <Ionicons style={styles.backIcon} name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}/>
                </TouchableOpacity>

                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>{this.props.title}</Text>
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 80,
        backgroundColor: '#B1040E',
    },
    backIconContainer: {
        width: 40,
        justifyContent: 'center'
    },
    backIcon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },

    headerTitleContainer: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20
    }
});