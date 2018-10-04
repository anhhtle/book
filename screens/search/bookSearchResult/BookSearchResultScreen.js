import React from 'React';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data', 'No result')
        }

        this.updateState = this.updateState.bind(this);
    }

    render () {
        if (this.state.data === 'No result') {
            return (
                <ScrollView style={styles.container}>
                    <BookSearchResultHeader navigation={this.props.navigation} updateState={this.updateState}/>
                    <Text>{this.state.data}</Text>
                </ScrollView>
            )
        }
                
        return (
            <ScrollView style={styles.container}>
                <BookSearchResultHeader navigation={this.props.navigation} updateState={this.updateState}/>

                { this.renderResultCards() }
            </ScrollView>
        )
    }

    renderResultCards() {
        let arr = [];
        this.state.data.items.forEach((item, index) => {
            arr.push(<ResultCard item={item} key={index} />)
        });

        return arr;
    }

    updateState(newData) {
        this.setState({data: newData});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});