import React from 'React';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from 'thebooksjourney/redux/actions/user';
import { getAvatars } from 'thebooksjourney/redux/actions/avatar';

import AvatarCard from './AvatarCard';

class UserAvatarSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
        }

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                
                <Text style={{color: '#8c1515'}}>Profile image</Text>
                <Text style={{marginBottom: 20}}>You can unlock other avatars later on.</Text>

                {this.renderAvatarCards()}

                <TouchableOpacity style={styles.saveButton} onPress={() => this.handleUpdate()}>
                    <Text style={{color: '#000'}}>SAVE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={this.props.skip}>
                    <Text style={styles.linkText}>SKIP >></Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderAvatarCards() {
        let arr = [];
        this.props.avatars.avatars.map((avatar, index) => {
            this.props.user.avatars_unlocked.map((avatarUnlocked) => {
                let profileAvatar = false;
                if (this.state.avatar === avatar._id) {
                    profileAvatar = true;
                }
                if (avatarUnlocked === avatar._id) {
                    arr.push(<AvatarCard key={avatar._id} avatar={avatar} profileAvatar={profileAvatar} onPress={() => this.setState({avatar: avatar._id})}/>)
                }
            })
        });
        return arr;
    }
    componentDidMount() {
        this.props.getAvatars(this.props.user.token);

        this.setState({avatar: this.props.user.avatar._id});
    }
    handleUpdate() {
        const updateObj = {
            avatar: this.state.avatar,
        }

        this.props.update(updateObj, 2);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED766',
        height: 35,
        width: 250,
        marginTop: 20,
        marginBottom: 10
    },
    link: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#009FB7',
        fontWeight: 'bold',
    }
});

const mapStateToProps = (state) => {
    const { user, avatars } = state;
    return { user, avatars }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser, getAvatars
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatarSection)