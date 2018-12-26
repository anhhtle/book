import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { renderRatingStars, renderLongDate } from 'thebooksjourney/screens/utility/helperFunctions';

export default FriendNewBookCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardHeading}>
                <Image source={{uri: props.friend.avatar.image}} style={styles.profileImage}/>
                <View style={styles.nameDateContainer}>
                    <Text><Text style={styles.profileName}>{props.friend.first_name + ' ' + props.friend.last_name}</Text> have a <Text style={{fontWeight: 'bold'}}>new book</Text>!</Text>
                    <Text style={styles.date}>{renderLongDate(props.date)}</Text>
                </View>
            </View>

            <View style={styles.cardContent}>
                <Image source={{uri: props.book.image }} style={styles.bookImage}/>
                <View style={styles.bookTextContainer}>
                    <Text style={styles.bookTitle} numberOfLines={2}>{ props.book.title }</Text>
                    <Text style={styles.author}>{ props.book.authors[0] }</Text>
                    
                    {/* ratings */}
                    <View style={{flexDirection: 'row'}}>
                        { renderRatingStars(props.book.ratings) }
                    </View>
                    {/* end ratings */}

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },

    // card heading
    cardHeading: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    nameDateContainer: {
        flex: 4,
        justifyContent: 'space-around'
    },
    profileName: {
        fontWeight: 'bold'
    },
    date: {
        color: 'grey',
        fontSize: 12,
    },

    // card content
    cardContent: {
        flexDirection: 'row'
    },
    bookImage: {
        flex: 1,
        height: 70,
        resizeMode: 'contain',
        backgroundColor: 'lightgrey',
        marginRight: 10
    },
    bookTextContainer: {
        flex: 4
    },
    bookTitle: {
        marginBottom: 2
    },
    author: {
        fontWeight: 'bold',
        marginBottom: 2
    }

});