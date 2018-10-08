import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, Dimensions, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class RequestCard extends React.Component {

    render () {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: 'blue'}} >
                    <TouchableOpacity style={{alignSelf: 'flex-end', backgroundColor: 'red'}}>
                        <Text>X</Text>
                    </TouchableOpacity>

                    <Image source={{url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.contactImage} />
                </View>

                <View style={styles.detailContainer}>
                    <Text>Anh Le</Text>
                    <Text>Jamie Lanister</Text>
                    <Text>King's Guard</Text>
                </View>

                <Button style={styles.button} title={'Connect'} onPress={() => console.log('hi')}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        width: Dimensions.get('window').width / 2,
        height: 200,
        borderWidth: 0.5,
        borderColor: 'grey',
        alignItems: 'center'
    },
    contactImage: {
        borderRadius: 35,
        width: 70,
        height: 70,
        marginTop: 10,
        resizeMode: 'contain',
        backgroundColor: 'red',
    },
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    button: {
        flex: 1,
        backgroundColor: 'pink',
    }
});