import React from 'react';
import { Text, View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {renderDate} from 'thebooksjourney/screens/utility/helperFunctions';


export default RecommendationCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Bookcase') }>
            <Image source={{uri: props.friend.image}} style={styles.profileImage}/>
            <View style={{flex: 1}}>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>{props.friend.first_name} {props.friend.last_name} </Text>
                    recommended a book for you:
                    <Text style={{fontWeight: 'bold'}}> {props.book.title}</Text>
                </Text>

                <View style={styles.dateContainer}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} color={'#8c1515'} size={20}/>
                    <Text style={styles.date}>{renderDate(props.date)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3
    },
    date: {
        marginLeft: 5,
        color: 'grey'
    }
});
