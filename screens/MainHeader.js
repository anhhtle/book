import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.textInput} onChangeText={(search_term) => this.setState({search_term})} placeholder='Seach book' keyboardType='email-address' />
                    <Ionicons style={styles.searchIcon} name={'ios-search'} color="#000"/>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 100,
        backgroundColor: 'powderblue',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchIcon: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        flex: 9,
        backgroundColor: '#fff',
        height: 30,
        paddingLeft: 20,
        fontSize: 16,
        borderRightWidth: 1,
        borderRightColor: '#d6d7da' 
    },
});