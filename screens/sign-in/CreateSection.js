import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CreateSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
            error: false,
            error_text: ''
        }

        this.handleCreate = this.handleCreate.bind(this);
        this.validate = this.validate.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>

                {this.renderCreateError()}

                <TextInput style={styles.textInput} 
                    value={this.state.first_name}
                    onChangeText={(first_name) => this.setState({first_name})} 
                    placeholder='First Name ' keyboardType='default' 
                    textContentType='emailAddress' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.last_name}
                    onChangeText={(last_name) => this.setState({last_name})} 
                    placeholder='Last Name ' keyboardType='default' 
                    textContentType='emailAddress' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})} 
                    placeholder='E-mail ' keyboardType='email-address' 
                    textContentType='emailAddress' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})} 
                    placeholder='Password ' keyboardType='default' 
                    textContentType='password' // iOS 11+ only
                    secureTextEntry={true}
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.password_confirm}
                    onChangeText={(password_confirm) => this.setState({password_confirm})} 
                    placeholder='Confirm Password ' keyboardType='default' 
                    textContentType='password' // iOS 11+ only
                    secureTextEntry={true}
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.handleCreate()}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        )
    }
    validate() {
        let validate = false;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if (!this.state.first_name || !this.state.last_name || !this.state.email || !this.state.password) {
            this.setState({
                error: true,
                error_text: 'Please fill out all fields'
            });
        } else if(this.state.password !== this.state.password_confirm) {
            this.setState({
                error: true,
                error_text: 'Password does not match'
            });
        } else if (reg.test(this.state.email) === false) {
            this.setState({
                error: true,
                error_text: 'Please enter a valid email'
            });
        }
        else {
            this.setState({
                error: false,
                error_text: ''
            });
            validate = true;
        }
        return validate;
    }
    renderCreateError() {
        if (this.props.error) {
            return (
                <Text style={styles.errorText}>{this.props.error}</Text>
            )
        }
        if (this.state.error) {
            return (
                <Text style={styles.errorText}>{this.state.error_text}</Text>
            )
        }
    }
    handleCreate() {
        if (this.validate()) {
            const createObj = {
                user: {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email.toLowerCase(),
                    password: this.state.password
                }
            }
            this.props.create(createObj);
        }
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
        color: '#8c1515',
        marginBottom: 10
    }
});