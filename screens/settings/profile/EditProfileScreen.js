import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import SettingHeader from '../SettingHeader';
import ProfilePictureSection from './ProfilePictureSection';
import BasicInfoSection from './BasicInfoSection';
import AddressSection from './AddressSection';
import EditInfoModal from './EditInfoModal';
import EditAddressModal from './EditAddressModal';


class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // info
            isInfoModalVisible: false,
            changeInfoArr: [{
                key: '',
                label: ''
            }],
            // address
            isAddressModalVisible: false,
            changeAddress: {
                key: '',
                label: ''
            },
        }

        // info
        this.handleShowInfoModal = this.handleShowInfoModal.bind(this);
        this.handleCloseInfoModal = this.handleCloseInfoModal.bind(this);
        // address
        this.handleShowAddressModal = this.handleShowAddressModal.bind(this);
        this.handleCloseAddressModal = this.handleCloseAddressModal.bind(this);
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
                    
                    showModal={this.handleShowInfoModal}
                    />

                <AddressSection 
                    street={this.props.user.address.street} 
                    city={this.props.user.address.city} 
                    state={this.props.user.address.state} 
                    zipcode={this.props.user.address.zipcode} 
                    country={this.props.user.address.country} 
                    additional_info={this.props.user.address.additional_info} 
                    
                    showModal={this.handleShowAddressModal}
                    />


                <EditInfoModal 
                    labels={this.state.changeInfoArr}

                    isModalVisible={this.state.isInfoModalVisible} 
                    closeModal={this.handleCloseInfoModal} 
                    />

                <EditAddressModal 
                    label={this.state.changeAddress}

                    isModalVisible={this.state.isAddressModalVisible} 
                    closeModal={this.handleCloseAddressModal} 
                    />

            </ScrollView>
        )
    }

    // basic info
    handleShowInfoModal(values) {
        this.setState({ isInfoModalVisible: true, changeInfoArr: values });
    }
    handleCloseInfoModal() {
        this.setState({ isInfoModalVisible: false });
    }

    // address
    handleShowAddressModal(values) {
        this.setState({ isAddressModalVisible: true, changeAddress: values });
    }
    handleCloseAddressModal() {
        this.setState({ isAddressModalVisible: false });
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
  
export default connect(mapStateToProps)(EditProfileScreen);