import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserToken, getCurrentUser } from 'thebooksjourney/redux/actions/user';

import LoginSection from './LoginSection';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_error: null,
            loginScreen: true
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>

                <LoginSection login={this.handleLogin} error={this.state.login_error} />

                <TouchableOpacity style={styles.button} onPress={() => this.setState({loginScreen: !this.state.loginScreen})}>
                    <Text style={{color: '#fff'}}>{this.state.loginScreen ? 'SIGN UP' : 'LOGIN'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} >
                    <Text style={styles.linkText}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
            </View>
        )
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c1515',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009FB7',
        height: 35,
        width: 250
    },
    link: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#FED766',
    }
    
});

const mapStateToProps = (state) => {
    const  { appState, user } = state;
    return { appState , user}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getUserToken,
        getCurrentUser,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);