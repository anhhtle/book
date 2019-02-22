import React from 'React';
import { ScrollView } from 'react-native';

// redux
import { connect } from 'react-redux';

import FriendGoBackHeader from '../../FriendGoBackHeader';
import AvatarCard from 'thebooksjourney/screen/utility/AvatarCard';
import AvatarLockedCard from './AvatarLockedCard';
import AvatarDetailModal from '../AvatarDetailModal'; 


class FriendAvatarDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
            profileAvatar: false,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <FriendGoBackHeader title={'Avatars'} navigation={this.props.navigation} destination={'FriendProfile'}/>

                {this.renderAvatars()}

                <AvatarDetailModal 
                    isVisible={this.state.isModalVisible} 
                    avatar={this.props.avatars.avatars[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    profileAvatar={this.state.profileAvatar}
                    />

            </ScrollView>
        )
    }

    renderAvatars() {
        let arr = [];
        this.props.avatars.avatars.map((avatar, index) => {
            if (avatar.name !== 'The Admin') { // don't show admin card
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
}

const mapStateToProps = (state) => {
    const { avatars, user } = state
    return { avatars, user }
};
  
export default connect(mapStateToProps)(FriendAvatarDetailedScreen);