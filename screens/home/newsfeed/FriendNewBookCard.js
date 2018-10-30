import React, { Component } from 'react';
import { Text, View, Image, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendNewBookCard extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.newsCard}>
                    <View style={styles.cardHeading}>
                        <Image source={{uri: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.profileImage}/>
                        <View style={styles.nameDateContainer}>
                            <Text><Text style={styles.profileName}>Anh Le</Text> started a <Text style={{fontWeight: 'bold'}}>new book</Text></Text>
                            <Text style={styles.date}>Sept 28, 2018</Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>
                        <Image source={{uri: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4165/9781416595199.jpg'}} style={styles.bookImage}/>
                        <View style={styles.bookTextContainer}>
                            <Text style={styles.bookTitle} numberOfLines={2}>American Assassin</Text>
                            <Text style={styles.author}>Vince Flynn</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.newsCard}>
                    <View style={styles.cardHeading}>
                        <Image source={{uri: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.profileImage}/>
                        <View style={styles.nameDateContainer}>
                            <Text><Text style={styles.profileName}>Anh Le</Text> started a <Text style={{fontWeight: 'bold'}}>new book</Text></Text>
                            <Text style={styles.date}>Sept 28, 2018</Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>
                        <Image source={{uri: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4165/9781416595199.jpg'}} style={styles.bookImage}/>
                        <View style={styles.bookTextContainer}>
                            <Text style={styles.bookTitle} numberOfLines={2}>American Assassin</Text>
                            <Text style={styles.author}>Vince Flynn</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.newsCard}>                    
                    <View style={styles.cardHeading}>
                        <Image source={{uri: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.profileImage}/>
                        <View style={styles.nameDateContainer}>
                            <Text><Text style={styles.profileName}>Anh Le</Text> started a <Text style={{fontWeight: 'bold'}}>new book</Text></Text>
                            <Text style={styles.date}>Sept 28, 2018</Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>
                        <Image source={{uri: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4165/9781416595199.jpg'}} style={styles.bookImage}/>
                        <View style={styles.bookTextContainer}>
                            <Text style={styles.bookTitle} numberOfLines={2}>American Assassin</Text>
                            <Text style={styles.author}>Vince Flynn</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                            </View>
                        </View>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
    },
    newsCard: {
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
        width: 100,
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