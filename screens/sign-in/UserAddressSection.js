import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class UserAddressSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            street: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            additional_info: '',
        }

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                
                <Text style={{color: '#8c1515'}}>Optional*</Text>
                <Text style={{marginBottom: 20}}>Info is used for requesting books.</Text>

                <TextInput style={styles.textInput} 
                    value={this.state.street}
                    onChangeText={(street) => this.setState({street})} 
                    placeholder='Street address' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.city}
                    onChangeText={(city) => this.setState({city})} 
                    placeholder='city' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.state}
                    onChangeText={(state) => this.setState({state})} 
                    placeholder='State' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.zipcode}
                    onChangeText={(zipcode) => this.setState({zipcode})} 
                    placeholder='Zipcode' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.country}
                    onChangeText={(country) => this.setState({country})} 
                    placeholder='Country' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.additional_info}
                    onChangeText={(additional_info) => this.setState({additional_info})} 
                    placeholder='Additional Info' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />


                <TouchableOpacity style={styles.saveButton} onPress={() => this.handleUpdate()}>
                    <Text style={{color: '#000'}}>SAVE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={this.props.skip}>
                    <Text style={styles.linkText}>SKIP >></Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleUpdate() {
        const updateObj = {
            address: {
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                country: this.state.country,
                additional_info: this.state.additional_info,
            }
        }

        this.props.update(updateObj, 1);
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
    textInput: {
        width: 270,
        backgroundColor: '#fff',
        height: 35,
        paddingLeft: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 10,
    },
    saveButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED766',
        height: 35,
        width: 250,
        marginTop: 10,
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