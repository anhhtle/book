import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariantsShare, searchVariantsShare } from 'thebooksjourney/redux//actions/variantShare';

class ShareHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: '',
            searched: false
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.goBackContainer} onPress={this.navigateHome}>
                    <Ionicons style={styles.goBackIcon} name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'} />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <TouchableOpacity style={styles.searchIconContainer} onPress={this.onSearchSubmit}>
                        <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
                    </TouchableOpacity>
                    <TextInput style={styles.textInput} placeholder='Seach community`s books' keyboardType='default' underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(search_term) => this.setState({search_term})}
                        onSubmitEditing={this.onSearchSubmit}
                    />
                </View>
            </View>
        )
    }
    onSearchSubmit = () => {
        let bodyObj = {
            query: this.state.search_term,
            page: 1
        }
        this.props.searchVariantsShare(this.props.user.token, bodyObj)
            .then(() => {
                this.setState({searched: true})
                this.props.setSearchTerm(this.state.search_term);
            });
    }
    navigateHome = () => {
        if (this.state.searched || this.props.searched) {
            let bodyObj = {
                page: 1
            }
            this.props.getVariantsShare(this.props.user.token, bodyObj)
                .then(() => this.props.navigation.navigate('Home'));
        } else {
            this.props.navigation.navigate('Home')
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 65,
        backgroundColor: '#f7ee71',
    },

    // left side
    goBackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    goBackIcon: {
        color: '#821515',
        fontSize: 35,
        fontWeight: `700`
    },

    // right side
    searchContainer: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIconContainer: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0
    },
    searchIcon: {
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        marginLeft: 0,
        color: "#000"
    },
    textInput: {
        flex: 9,
        backgroundColor: '#fff',
        height: 30,
        paddingLeft: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
    },

});


const mapStateToProps = (state) => {
    const { user, variantsShare } = state;
    return { user, variantsShare }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        searchVariantsShare, getVariantsShare
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(ShareHeader)