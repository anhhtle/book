import React from 'React';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewUser, getUserToken, getCurrentUser, updateProfile } from 'thebooksjourney/redux/actions/user';

import LoginSection from './LoginSection';
import CreateSection from './CreateSection';
import UserAddressSection from './UserAddressSection';
import UserAvatarSection from './userAvatarSection/';
import UserAliasSection from './UserAliasSection';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_error: null,
            loginSection: false,
            createSection: false,
            userAddressSection: false,
            userAvatarSection: true,
            userAliasSection: false,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>

                {this.renderBody()}

                {this.renderButtons()}
            </View>
        )
    }
    renderBody() {
        if (this.state.loginSection) {
            return (
                <LoginSection login={this.handleLogin} error={this.state.login_error} />
            )
        } else if (this.state.createSection) {
            return (
                <CreateSection create={this.handleCreate} />
            )
        } else if (this.state.userAddressSection) {
            return (
                <UserAddressSection update={this.handleUpdate} skip={() => this.handleSkip(1)} />
            )
        } else if (this.state.userAvatarSection) {
            return (
                <UserAvatarSection update={this.handleUpdate} skip={() => this.handleSkip(2)} />
            )
        } else if (this.state.userAliasSection) {
            return (
                <UserAliasSection update={this.handleUpdate} skip={() => this.handleSkip(3)} />
            )
        }
    }
    renderButtons() {
        if (this.state.loginSection || this.state.createSection) {
            return (
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({loginSection: !this.state.loginSection, createSection: !this.state.createSection})}>
                        <Text style={styles.linkText}>{this.state.loginSection ? 'SIGN UP' : 'LOGIN'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link} >
                        <Text style={styles.linkText}>FORGOT PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    handleLogin(loginObj) {

        // this.props.getCurrentUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaC5odC5sZUBnbWFpbC5jb20iLCJpZCI6IjZiOWIxNTIyMTFkY2IzMDY3NTY1OWUwNSIsImV4cCI6MTU0ODk2NDk4NCwiaWF0IjoxNTQzNzgwOTg0fQ.24IYvapi5PVBpNPOuzjn9EZPb5bLn1AOM_u3i4Wo5lI');

        this.props.getUserToken(loginObj)
            .then(() => {
                if (this.props.user.error) {
                    this.setState({login_error: this.props.user.error});
                } else {
                    this.props.getCurrentUser(this.props.user.token)
                        .then(() => {
                                if (!this.props.user.error) {
                                    this.props.navigation.navigate('Home');
                                }
                            })
                }
            })
            .catch(err => {console.log(err)});

    }
    handleCreate(createObj) {
        console.log(createObj);
        this.setState({
            loginSection: false,
            createSection: false,
            userAddressSection: true
        });
    }
    handleUpdate(updateObj, skipNum) {
        console.log(updateObj);
        this.handleSkip(skipNum);
    }
    handleSkip(num) {
        if (num === 1) {
            this.setState({
                userAddressSection: false,
                userAvatarSection: true
            });
        } else if (num === 2) {
            this.setState({
                userAvatarSection: false,
                userAliasSection: true
            });
        } else {
            this.props.navigation.navigate('UserGuide', {destination: 'Dashboard'});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c1515',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#009FB7',
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#FED766',
        fontWeight: 'bold',
    }
    
});

const mapStateToProps = (state) => {
    const  { appState, user } = state;
    return { appState , user}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createNewUser, getUserToken, getCurrentUser, updateProfile
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);