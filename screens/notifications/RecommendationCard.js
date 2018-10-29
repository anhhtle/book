import React from 'react';
import { Text, View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import moment from 'moment';

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

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} color={'#8c1515'} size={20}/>
                    <Text style={styles.date}>{renderDate(props.date)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

}

function renderDate(date) {
    let a = moment(date);
    let b = moment(new Date());
    if (b.diff(a, 'hours') < 1) {
        return b.diff(a, 'minutes') + 'm'
    } else if (b.diff(a, 'days') < 1) {
        return b.diff(a, 'hours') + 'h'
    } else if(b.diff(a, 'days') >= 1 && b.diff(a, 'days') < 7) {
        return b.diff(a, 'days') + 'd'
    } else {
        return b.diff(a, 'weeks') + 'w'
    }
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
    date: {
        marginLeft: 5,
        color: 'grey'
    }
});
