import React from 'React';
import { View, Image, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native';

import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewUser, getUserToken, getCurrentUser, updateProfile } from 'thebooksjourney/redux/actions/user';

import LoginSection from './LoginSection';
import CreateSection from './CreateSection';
import ForgotPasswordSection from './ForgotPasswordSection';
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
            create_error: null,
            forgotPasswordSection: false,
            userAddressSection: false,
            userAvatarSection: false,
            userAliasSection: false,

            loading: true,
            asyncToken: null,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.getAsyncStorage = this.getAsyncStorage.bind(this);
    }
    componentWillMount () {
        this.getAsyncStorage();
    }
    render () {
        return (
            <View style={styles.container}>

                <Image style={styles.logo} source={require('thebooksjourney/assets/logo_bg.png')} />

                {this.renderBody()}

                {this.renderButtons()}

            </View>
        )
    }
    renderBody() {
        if (this.state.loginSection) {
            return (
                <LoginSection login={this.handleLogin} error={this.state.login_error} loading={this.state.loading} />
            )
        } else if (this.state.createSection) {
            return (
                <CreateSection create={this.handleCreate} error={this.state.create_error} />
            )
        } else if (this.state.userAddressSection) {
            return (
                <UserAddressSection update={this.handleUpdate} skip={() => this.handleSkip(1)} />
            )
        } else if (this.state.forgotPasswordSection) {
            return (
                <ForgotPasswordSection update={this.handleForgotPassword} goBack={() => this.setState({loginSection: true, forgotPasswordSection: false})}/>
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

                    <TouchableOpacity style={styles.link} onPress={() => this.setState({
                        loginSection: false, createSection: false, forgotPasswordSection: true
                    })}>
                        <Text style={styles.linkText}>FORGOT PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    handleLogin(loginObj) {

        this.setState({loading: true});

        this.props.getUserToken(loginObj)
            .then(() => {
                this.setState({loading: false});
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
            .catch(err => {
                console.log(err);
                this.setState({loading: false});
            });

    }
    handleCreate(createObj) {
        this.props.createNewUser(createObj)
            .then(() => {
                if (this.props.user.error) {
                    this.setState({create_error: this.props.user.error});
                } else {
                    this.props.getCurrentUser(this.props.user.token)
                        .then(() => {
                            this.setAsyncStorage(this.props.user.token);
                        });
                    
                    this.setState({
                        loginSection: false,
                        createSection: false,
                        userAddressSection: true
                    });
                }
            });

    }
    handleUpdate(updateObj, skipNum) {
        this.props.updateProfile(this.props.user.token, updateObj)
            .then(() => {
                this.props.getCurrentUser(this.props.user.token);
                this.handleSkip(skipNum);
            });
    }
    handleForgotPassword(email) {
        fetch(`${API_BASE_URL}/user/password-reset-key/`, 
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        }
        ).then(res => res.json())
        .catch(err => {
            console.log(err);
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
            await AsyncStorage.setItem('TheBooksJourneyToken', token);
        } catch (error) {
            console.log(error);
        }
    };
    async getAsyncStorage () {
        try {
            const token =  await AsyncStorage.getItem('TheBooksJourneyToken');
            if (token) {
                this.setState({loading: false});
                this.props.getCurrentUser(token)
                    .then(() => {
                        if (!this.props.user.error) {
                            this.props.navigation.navigate('Home')
                        }
                    })
                    .catch(err => console.error(err));
            } else {
                this.setState({loading: false});
            }
        } catch (error) {
            console.log(error);
            this.setState({loading: false});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f6ef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 77,
        height: 70,
        marginBottom: 20
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
        color: '#8c1515',
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