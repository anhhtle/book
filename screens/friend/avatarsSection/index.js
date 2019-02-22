import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser, updateProfile } from 'thebooksjourney/redux/actions/user';

// components
import AvatarCard from 'thebooksjourney/screens/utility/AvatarCard';
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
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Avatars unlocked ({this.props.friend.avatars_unlocked.length}/{this.props.avatars.avatars.length - 1})</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FriendAvatars')}>
                        <Text style={styles.browseLink}>Browse all...</Text>
                    </TouchableOpacity>
                </View>

                {this.renderAvatars()}

                <AvatarDetailModal 
                    isVisible={this.state.isModalVisible} 
                    avatar={this.props.avatars.avatars[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    profileAvatar={this.state.profileAvatar}
                    />
                
            </View>
        );
    }

    renderAvatars() {
        let arr = [];
        this.props.avatars.avatars.map((avatar, index) => {
            this.props.friend.avatars_unlocked.map((avatarUnlocked) => {
                let profileAvatar = false;
                if (avatar._id === this.props.friend.avatar._id) {
                    profileAvatar = true;
                }
                if (avatar._id === avatarUnlocked) {
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
    const { avatars } = state
    return { avatars }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser, updateProfile
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(AvatarsSection);