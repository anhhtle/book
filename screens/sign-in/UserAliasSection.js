import React from 'React';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class UserAliasSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alias: '',
            job: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                
                <Text style={{color: '#8c1515'}}>Optional*</Text>
                <Text style={{marginBottom: 20}}>Just for fun.</Text>

                <TextInput style={styles.textInput} 
                    value={this.state.alias}
                    onChangeText={(alias) => this.setState({alias})} 
                    placeholder='Your favorite fictional character' keyboardType='default'
                    underlineColorAndroid='rgba(0,0,0,0)' />

                <TextInput style={styles.textInput} 
                    value={this.state.job}
                    onChangeText={(job) => this.setState({job})} 
                    placeholder="Favorite character's job" keyboardType='default'
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
            alias: this.state.alias,
            job: this.state.job
        }

        this.props.update(updateObj, 3);
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