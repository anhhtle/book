import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import SettingHeader from '../SettingHeader';
import ProfilePictureSection from './ProfilePictureSection';

class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SettingHeader navigation={this.props.navigation} title={'Edit profile'} />
                <ProfilePictureSection image={this.state.user.image === '' ? 'https://static.intercomassets.com/avatars/2346654/square_128/person-placeholder-8-1535450106.png?1535450106' : this.props.user.image} />
            </View>
        )
    }

    componentDidMount() {
        this.setState({user: this.props.user});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
  };
  
export default connect(mapStateToProps)(EditProfileScreen);