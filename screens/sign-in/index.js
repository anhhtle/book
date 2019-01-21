import React from 'React';
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native';

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
            loginSection: true,
            createSection: false,
            userAddressSection: false,
            userAvatarSection: false,
            userAliasSection: false,

            asyncToken: null,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
    }
    componentWillMount () {
        this.getAsyncStorage();
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
                                this.setAsyncStorage(this.props.user.token);
                                this.props.navigation.navigate('Home');
                            }
                        })
                }
            })
            .catch(err => {console.log(err)});

    }
    handleCreate(createObj) {
        this.props.createNewUser(createObj)
            .then(() => {
                this.props.getCurrentUser(this.props.user.token)
                    .then(() => {
                        this.setAsyncStorage(this.props.user.token);
                    });
                
                this.setState({
                    loginSection: false,
                    createSection: false,
                    userAddressSection: true
                });
            });

    }
    handleUpdate(updateObj, skipNum) {
        this.props.updateProfile(this.props.user.token, updateObj)
            .then(() => {
                this.props.getCurrentUser(this.props.user.token);
                this.handleSkip(skipNum);
            });
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
    async setAsyncStorage (token) {
        try {
            await AsyncStorage.setItem('TheBooksJourneyToken', JSON.stringify(token));
        } catch (error) {
            console.log(error);
        }
    };
    async getAsyncStorage () {
        try {
            const token =  await AsyncStorage.getItem('TheBooksJourneyToken');
            if (token) {
                this.props.navigation.navigate('Dashboard');
            }
        } catch (error) {
            console.log(error);
        }
        return;
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