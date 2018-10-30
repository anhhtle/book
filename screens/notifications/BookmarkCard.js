import React from 'react';
import { Text, View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {renderDate} from 'book/screens/utility/helperFunctions';


export default BookmarkCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Bookcase') }>
            <Image source={{uri: 'https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg'}} style={styles.profileImage}/>
            <View style={{flex: 1}}>
                <Text>You earned the
                    <Text style={{fontWeight: 'bold'}}> {props.bookmark.name} </Text>
                    bookmark!
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
