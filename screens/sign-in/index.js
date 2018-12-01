import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserToken } from 'book/redux/actions';

class SignInScreen extends React.Component {
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
                    placeholder='Email ' keyboardType='default' 
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})} 
                    placeholder='Password ' keyboardType='default' 
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.handleLogin()}>
                    <Text style={{color: '#fff'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleLogin() {
        const loginObj = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }
        this.props.getUserToken(loginObj)
            .then(() => {
                console.log(this.props.user.token)
                if (this.props.user.token) {
                    this.props.navigation.navigate('Home');
                }
            });

    }
    renderLoginError() {
        if(this.props.user.error) {
            return (
                <Text style={styles.errorText}>{this.props.user.error}</Text>
            )
        }
    }

    componentDidMount() {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c1515',
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
        backgroundColor: '#2D728F',
        height: 35,
        width: 250
    },
    errorText: {
        color: '#fff',
        marginBottom: 10
    }
});

const mapStateToProps = (state) => {
    const  { appState, user } = state;
    return { appState , user}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getUserToken,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);