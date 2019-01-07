import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser, updateProfile } from 'thebooksjourney/redux/actions/user';

// components
import AvatarCard from './AvatarCard';
import AvatarDetailModal from './AvatarDetailModal';

class AvatarsSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
            profileAvatar: false,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Avatars unlocked ({this.props.user.avatars_unlocked.length - 1}/{this.props.avatars.avatars.length - 1})</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Avatars')}>
                        <Text style={styles.browseLink}>Browse all...</Text>
                    </TouchableOpacity>
                </View>

                {this.renderAvatars()}

                <AvatarDetailModal 
                    isVisible={this.state.isModalVisible} 
                    avatar={this.props.avatars.avatars[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    saveChanges={this.handleSaveChanges}
                    profileAvatar={this.state.profileAvatar}
                    />
                
            </View>
        );
    }

    renderAvatars() {
        let arr = [];
        this.props.avatars.avatars.map((avatar) => {
            this.props.user.avatars_unlocked.map((avatarUnlocked,index) => {
                let profileAvatar = false;
                if (avatar._id === this.props.user.avatar._id) {
                    profileAvatar = true;
                }
                if (avatar._id === avatarUnlocked && index > 0) {
                    arr.push(<AvatarCard key={avatar._id} avatar={avatar} showModal={() => this.handleShowModal(index, avatar._id)} profileAvatar={profileAvatar}/> )
                    
                }
            })

        })
        
        return arr;
    }
    handleShowModal(index, key) {
        let profileAvatar = false;
        if (key === this.props.user.avatar._id) {
            profileAvatar = true
        }
        this.setState({isModalVisible: true, indexSelected: index, profileAvatar})
    }
    handleCloseModal() {
        this.setState({isModalVisible: false})
    }
    handleSaveChanges(id) {
        this.props.updateProfile(this.props.user.token, {avatar: id})
            .then(this.props.getCurrentUser(this.props.user.token));
    
        this.setState({isModalVisible: false});
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        backgroundColor: '#8c1515',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    browseLink: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

const mapStateToProps = (state) => {
    const { avatars, user } = state
    return { avatars, user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser, updateProfile
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(AvatarsSection);