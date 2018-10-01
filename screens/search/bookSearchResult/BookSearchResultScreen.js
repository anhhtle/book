import React from 'React';
import { View, ScrollView, StyleSheet } from 'react-native';

import BookSearchResultHeader from './BookSearchResultHeader';
import ResultCard from './ResultCard'

// const data = {
//     items: [
//         {
//             id: "ilc0DwAAQBAJ",
//             volumeInfo: {
//                 title: "Harry Potter - A Journey Through A History of Magic",
//                 authors: [
//                     "British Library"
//                 ],
//                 averageRating: 4,
//                 imageLinks: {
//                     smallThumbnail: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//                 }
//             }
//         }
//     ]
// }

export default class BookSearchResultScreen extends React.Component {

    render () {
        const data = this.props.navigation.getParam('data', 'no result');

        if (data.totalItems === 0) {
            return (
                <Text>No result</Text>
            )
        }
                
        return (
            <ScrollView style={styles.container}>
                <BookSearchResultHeader navigation={this.props.navigation} />

                { this.renderResultCards() }

            </ScrollView>
        )
    }

    renderResultCards() {
        const data = this.props.navigation.getParam('data', 'no result');

        let arr = [];
        data.items.forEach((item, index) => {
            arr.push(<ResultCard item={item} key={index} />)
        });

        return arr;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});