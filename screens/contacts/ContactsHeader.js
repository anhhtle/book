import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// redux
import { connect } from 'react-redux';

class ContactsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: '',
            search_result: [
                {
                    "alias": 'Hodor',
                    "job": "Holding doors",
                    "avatar": {
                        "_id": "c367851d914237495b576e01",
                        "name": "The Knight",
                        "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
                        "quote": "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
                        "quote_author": "George R.R. Martin",
                        "lock": "",
                        "unlocked": "For being a reader"
                    },
                    "_id": "a22bcba0fbc61672285a2e59",
                    "first_name": "Edd",
                    "last_name": "Lee",
                    "email": "ahtle@stanford.edu"
                }
            ]
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity style={styles.searchIconContainer} onPress={this.onSearchSubmit}>>
                        <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} color="#000"/>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.textInput}   
                        placeholder='Find friend' keyboardType='default' underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(search_term) => this.setState({search_term})}
                        onSubmitEditing={this.onSearchSubmit}
                    />
                </View>

                <TouchableOpacity style={styles.settingsContainer} onPress={() => this.props.navigation.navigate('Setting') }>
                    <Ionicons style={styles.settingsIcon} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} color="#000"/>
                </TouchableOpacity>
            </View>
        )
    }

    onSearchSubmit = () => {
        // dev
        this.props.navigation.navigate('FriendsSearchResult', { data: this.state.search_result });

        // fetch(`${API_BASE_URL}/user/friend/search`, 
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': `Token ${this.props.user.token}`,
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({query: this.state.search_term})
        //     }
        // ).then(res => {
        //     return res.json();
        // }).then(resJson => {
        //     this.props.navigation.navigate('FriendsSearchResult', { data: resJson });
        // }).catch(err => {
        //     console.log(err);
        // });
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 65,
        backgroundColor: '#B1040E',
    },

    // left side
    searchContainer: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchIconContainer: {
        width: 40
    },
    searchIcon: {
        fontSize: 20,
        textAlign: 'center',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#fff',
        height: 30,
        paddingLeft: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
    },

    // right side
    settingsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    settingsIcon: {
        color: '#FFF',
        fontSize: 20,
    }
});

const mapStateToProps = (state) => {
    const { user } = state;
    return { user }
}

export default connect(mapStateToProps)(ContactsHeader)