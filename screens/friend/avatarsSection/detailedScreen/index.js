import React from 'React';
import { ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser, updateProfile } from 'thebooksjourney/redux/actions/user';

import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';
import AvatarCard from '../AvatarCard';
import AvatarLockedCard from './AvatarLockedCard';
import AvatarDetailModal from '../AvatarDetailModal'; 


class AvatarDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
            profileAvatar: false,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <GoBackHeader title={'Avatars'} navigation={this.props.navigation} />

                {this.renderAvatars()}

                <AvatarDetailModal 
                    isVisible={this.state.isModalVisible} 
                    avatar={this.props.avatars.avatars[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    saveChanges={this.handleSaveChanges}
                    profileAvatar={this.state.profileAvatar}
                    setProfileAvatar={this.handleSetProfileAvatar}
                    />

            </ScrollView>
        )
    }

    renderAvatars() {
        let arr = [];
        this.props.avatars.avatars.map((avatar, index) => {
            if (index > 0) { // don't show admin card
                let profileAvatar = false;
                if (avatar._id === this.props.user.avatar._id) {
                    profileAvatar = true;
                }
                let match = false;
                this.props.user.avatars_unlocked.map((avatarUnlocked) => {
                    if (avatar._id === avatarUnlocked) {
                        match = true;
                    }
                })
                if (match) {
                    arr.push(<AvatarCard key={avatar._id} avatar={avatar} showModal={() => this.handleShowModal(index, avatar._id)} profileAvatar={profileAvatar}/> )
                } else {
                    arr.push(<AvatarLockedCard key={avatar._id} avatar={avatar}/> )
                }
            }
        });

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
        flex: 1
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
  
export default connect(mapStateToProps, mapDispatchToProps)(AvatarDetailedScreen);