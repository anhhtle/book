import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';

import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: '*',
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity style={styles.searchIconContainer} onPress={this.onSearchSubmit}>
                        <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} color="#000"/>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput} placeholder='Add books you own' keyboardType='default' underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(search_term) => this.setState({search_term})}
                        onSubmitEditing={this.onSearchSubmit}
                    />
                </View>

                <TouchableOpacity style={styles.settingsContainer} onPress={() => this.props.navigation.navigate('Setting') }>
                    <Image style={styles.profileImage} source={{uri: this.props.user.avatar.image }} />
                </TouchableOpacity>
            </View>
        )
    }

    onSearchSubmit = () => {
        fetch(`${API_BASE_URL}/books/search`, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({query: this.state.search_term})
            }
            ).then(res => res.json())
            .then(resJson => {
                this.props.navigation.navigate('BookSearchResult', { data: resJson });
            }).catch(err => {
                console.error(err);
            });
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 60,
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
        textAlign: 'center'
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
    // settingsIcon: {
    //     color: '#FFF',
    //     fontSize: 20,
    // },
    profileImage: {
        width: 35,
        height: 35,
        marginLeft: 5,
        borderRadius: 18
    }
});


const mapStateToProps = (state) => {
    const  { user } = state;
    return { user}
}

export default connect(mapStateToProps)(MainHeader);