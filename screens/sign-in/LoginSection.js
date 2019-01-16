import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class LoginSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'anh.ht.le@gmail.com',
            password: 'password'
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>

                {this.renderLoginError()}

                <TextInput style={styles.textInput} 
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})} 
                    placeholder='Email ' keyboardType='email-address' 
                    textContentType='emailAddress' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})} 
                    placeholder='Password ' keyboardType='default' 
                    textContentType='password' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.handleLogin()}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderLoginError() {
        if(this.props.error) {
            return (
                <Text style={styles.errorText}>{this.props.error}</Text>
            )
        }
    }
    handleLogin() {
        const loginObj = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }
        this.props.login(loginObj);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        backgroundColor: '#fff',
        height: 35,
        paddingLeft: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
        marginBottom: 10,
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009FB7',
        height: 35,
        width: 250
    },
    errorText: {
        color: '#fff',
        marginBottom: 10
    }
});