import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ForgotPasswordSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            submitted: false,
            error: false,
            error_text: true
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>

                {this.renderCreateError()}

                {this.renderBody()}

                {this.renderButton()}

                <TouchableOpacity style={styles.link} onPress={() => this.handleGoBack()} >
                    <Text style={styles.linkText}>BACK TO LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderCreateError() {
        if (this.state.error) {
            return (
                <Text style={styles.infoText}>{this.state.error_text}</Text>
            )
        }
    }
    renderBody() {
        if (!this.state.submitted) {
            return (
                <TextInput style={styles.textInput} 
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})} 
                    placeholder='Email ' keyboardType='email-address' 
                    textContentType='emailAddress' // iOS 11+ only
                    underlineColorAndroid='rgba(0,0,0,0)' />
            )
        } else {
            return (
                <Text style={styles.infoText}>Please check your e-mail</Text>
            )
        }
    }
    renderButton() {
        if (!this.state.submitted) {
            return (
                <TouchableOpacity style={styles.submitBtn} onPress={() => this.handleUpdate()}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>SUBMIT</Text>
                </TouchableOpacity>
            )
        } 
    }
    handleUpdate() {
        if (this.validate()) {
            let forgot_password_key = Math.random().toString(36).substr(2, 7);
    
            const updateObj = {
                email: this.state.email,
                forgot_password_key
            }
            this.props.update(updateObj);
    
            this.setState({
                submitted: true
            });
        }
    }
    handleGoBack() {
        this.props.goBack();
    }
    validate() {
        let validate = false;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if (reg.test(this.state.email) === false) {
            this.setState({
                error: true,
                error_text: 'Please enter a valid email'
            });
        } else {
            this.setState({
                error: false,
                error_text: ''
            });
            validate = true;
        }
        return validate;
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
    submitBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009FB7',
        height: 35,
        width: 250,
        marginBottom: 20
    },
    link: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#FED766',
        fontWeight: 'bold',
    },
    infoText: {
        color: '#fff',
        marginBottom: 10
    }
});