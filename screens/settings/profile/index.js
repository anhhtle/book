import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile, getCurrentUser } from 'thebooksjourney/redux/actions/user';

// components
import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';
import AvatarSection from './AvatarSection';
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
        this.handleUpdateInfoModal = this.handleUpdateInfoModal.bind(this);
        // address
        this.handleShowAddressModal = this.handleShowAddressModal.bind(this);
        this.handleCloseAddressModal = this.handleCloseAddressModal.bind(this);
        this.handleUpdateAddressModal = this.handleUpdateAddressModal.bind(this);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <GoBackHeader navigation={this.props.navigation} title={'Edit profile'} />

                <AvatarSection image={this.props.user.avatar.image} navigation={this.props.navigation}/>

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
                    updateModal={this.handleUpdateInfoModal}
                    closeModal={this.handleCloseInfoModal} 
                    />

                <EditAddressModal 
                    label={this.state.changeAddress}

                    isModalVisible={this.state.isAddressModalVisible} 
                    updateModal={this.handleUpdateAddressModal}
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
    handleUpdateInfoModal(items) {
        let updateObj = {};
        items.forEach(item => {
            updateObj[item.key] = item.value;
        });

        this.props.updateProfile(this.props.user.token, updateObj)
            .then(() => this.props.getCurrentUser(this.props.user.token))
    }

    // address
    handleShowAddressModal(values) {
        this.setState({ isAddressModalVisible: true, changeAddress: values });
    }
    handleCloseAddressModal() {
        this.setState({ isAddressModalVisible: false });
    }
    handleUpdateAddressModal(key, value) {
        let updateObj = {address: Object.assign({}, this.props.user.address)};
        updateObj.address[key] = value;

        this.props.updateProfile(this.props.user.token, updateObj)
            .then(() => this.props.getCurrentUser(this.props.user.token))
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
        updateProfile, getCurrentUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);