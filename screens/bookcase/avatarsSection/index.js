import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

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
                    <Text style={styles.headerTitle}>Avatars unlocked ({this.props.avatars.length}/10)</Text>

                    <Text style={styles.browseLink}>Browse all...</Text>
                </View>

                {this.renderAvatars()}

                <AvatarDetailModal 
                    isVisible={this.state.isModalVisible} 
                    avatar={this.props.avatars[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    saveChanges={this.handleSaveChanges}
                    profileAvatar={this.state.profileAvatar}
                    />
                
            </View>
        );
    }

    renderAvatars() {
        let arr = [];
        this.props.user.avatarUnlocked.map((index) => {
            arr.push(<AvatarCard key={this.props.avatars[index]._id} avatar={this.props.avatars[index]} showModal={() => this.handleShowModal(index, this.props.avatars[index]._id)} /> )
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
    handleSaveChanges() {
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
    const { avatars, user } = state
    return { avatars, user }
};
  
export default connect(mapStateToProps)(AvatarsSection);