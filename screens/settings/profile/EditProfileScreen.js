import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUserInfo } from 'book/redux/actions';

// components
import SettingHeader from '../SettingHeader';
import ProfilePictureSection from './ProfilePictureSection';
import BasicInfoSection from './BasicInfoSection';
import AddressSection from './AddressSection';
import EditInfoModal from './EditInfoModal';


class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }

        this.handleChangeUserInfo = this.handleChangeUserInfo.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SettingHeader navigation={this.props.navigation} title={'Edit profile'} />

                <ProfilePictureSection image={this.props.user.image === '' ? 'https://static.intercomassets.com/avatars/2346654/square_128/person-placeholder-8-1535450106.png?1535450106' : this.props.user.image} />

                <BasicInfoSection 
                    firstName={this.props.user.first_name} 
                    lastName={this.props.user.last_name} 
                    email={this.props.user.email} 
                    alias={this.props.user.alias} 
                    job={this.props.user.job} 
                    
                    showModal={this.handleShowModal}
                    />

                <AddressSection 
                    street={this.props.user.address.street} 
                    city={this.props.user.address.city} 
                    state={this.props.user.address.state} 
                    zipcode={this.props.user.address.zipcode} 
                    country={this.props.user.address.country} 
                    addional_info={this.props.user.address.addtional_info} />

                <EditInfoModal 
                    isModalVisible={this.state.isModalVisible} 
                    closeModal={this.handleCloseModal} 
                    />

                    <Button title={'show modal'} onPress={() => this.handleShowModal()}/>
                    <Button title={'change info'} onPress={() => this.handleChangeUserInfo('first_name', 'hi')}/>

            </ScrollView>
        )
    }

    handleChangeUserInfo(field, value) {
        this.props.changeUserInfo(field, value);
    }
    handleShowModal() {
        this.setState({ isModalVisible: true });
    }
    handleCloseModal() {
        this.setState({ isModalVisible: false });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeUserInfo
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);