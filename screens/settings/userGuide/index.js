import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';

export default UserGuideScreen = (props) => {
    return (
        <View style={styles.container}>
            <GoBackHeader navigation={props.navigation} title={'User Guide'} destination={props.navigation.state.params.destination} />

            <View style={styles.body}>
                <Text style={styles.h1}>Take a book, give a book</Text>

                <Text><Text style={styles.label}>The Book's Journey</Text>'s mission is to promote reading by building a sharing community. As part of this community, you are encouraged to request books that you are interested in, and in return, we hope that you will be generous by listing books you own and willing to mail to requesting community members.</Text>

                <Text style={styles.h2}>Bookmarks</Text>
                <Text>Bookmarks are used to make book requests to community members. There are two types: silver and gold bookmarks; both are used the same way but how you obtains them are different.</Text>
                <View style={styles.ul}>
                    <View style={styles.li}>
                        <Ionicons style={{marginRight: 10}} color={'silver'} size={24} name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}/>
                        <Text>You get 2 Silver Bookmarks (and no more than 2 total). They will refresh every week.</Text>
                    </View>
                    <View style={styles.li}>
                        <Ionicons style={{marginRight: 10}} color={'gold'} size={24} name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}/>
                        <Text>Gold Bookmarks are earned by giving/mailing your book to community member. The more you give, the more you can request!</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.booksAvailableBtn} onPress={() => props.navigation.navigate('ShareBooksScreen')}>
                    <Text>See books available</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        padding: 10
    },
    h1: {
        margin: 20,
        fontSize: 20,
        color: '#8c1515',
        textAlign: 'center'
    },
    h2: {
        color: '#8c1515',
        marginVertical: 20,
        fontSize: 18,
        textAlign: 'center'
    },
    label: {
        color: '#8c1515',
        fontWeight: 'bold'
    },
    ul: {
        paddingLeft: 10,
        paddingRight: 20
    },
    li: {
        flexDirection: 'row',
        marginVertical: 10
    },
    booksAvailableBtn: {
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'gold',
        borderRadius: 5,
        alignSelf: 'center'
    }

});
