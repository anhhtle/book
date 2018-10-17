import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import SettingHeader from '../SettingHeader';
import ProfilePictureSection from './ProfilePictureSection';
import BasicInfoSection from './BasicInfoSection';


class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SettingHeader navigation={this.props.navigation} title={'Edit profile'} />

                <ProfilePictureSection image={this.props.user.image === '' ? 'https://static.intercomassets.com/avatars/2346654/square_128/person-placeholder-8-1535450106.png?1535450106' : this.props.user.image} />
                <BasicInfoSection firstName={this.props.user.first_name} lastName={this.props.user.last_name} email={this.props.user.email} alias={this.props.user.alias} job={this.props.user.job} />
            </ScrollView>
        )
    }

    componentDidMount() {
        // this.setState({user: this.props.user});
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