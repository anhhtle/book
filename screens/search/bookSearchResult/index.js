import React from 'React';
import { Text, ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants, addVariant } from 'thebooksjourney/redux/actions/variant';

import BookSearchResultHeader from './BookSearchResultHeader';
import ResultCard from './ResultCard';
import BookDetailModal from './BookDetailModal';


class BookSearchResultScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data', 'No result'),
            isModalVisible: false,
            indexSelected: 0,
        }

        this.updateState = this.updateState.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleAddWatchlistBook = this.handleAddWatchlistBook.bind(this);
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

                { this.renderBookDetailModal() }

            </ScrollView>
        )
    }
    componentDidMount() {
    }
    renderResultCards() {
        let arr = [];
        this.state.data.items.forEach((item, index) => {
            arr.push(<ResultCard item={item} key={index} showModal={() => this.handleShowModal(index)}/>)
        });

        return arr;
    }
    renderBookDetailModal() {
        if (this.state.data.items.length > 0) {
            return (
                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    item={this.state.data.items[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    addBook={() => this.handleAddBook(this.state.data.items[this.state.indexSelected])}
                    addWatchlistBook={() => this.handleAddWatchlistBook(this.state.data.items[this.state.indexSelected])}
                />
            )
        }
    }
    updateState(newData) {
        this.setState({data: newData});
    }
    handleShowModal(index) {
        this.setState({isModalVisible: true, indexSelected: index})
    }
    handleAddBook(item) {
        let image = null;
        if (item.volumeInfo.imageLinks) {
            image = item.volumeInfo.imageLinks.smallThumbnail
        }

        let book = {
            google_id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            categories: item.volumeInfo.categories,
            description: item.volumeInfo.description,
            image,
            ratings: item.volumeInfo.averageRating,
            industryIdentifiers: item.volumeInfo.industryIdentifiers
        }

        let addObj = {book, status: 'Not read'};

        this.props.addVariant(this.props.user.token, addObj)
            .then(() => {
                this.setState({isModalVisible: false});
                this.props.getVariants(this.props.user.token);
                this.props.navigation.navigate('MyBooks');
            });

    }
    handleAddWatchlistBook(item) {
        let image = null;
        if (item.volumeInfo.imageLinks) {
            image = item.volumeInfo.imageLinks.smallThumbnail
        }

        let book = {
            google_id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            categories: item.volumeInfo.categories,
            description: item.volumeInfo.description,
            image,
            ratings: item.volumeInfo.averageRating,
            industryIdentifiers: item.volumeInfo.industryIdentifiers
        }

        let addObj = {book, status: 'Watchlist'};

        this.props.addVariant(this.props.user.token, addObj)
            .then(() => {
                this.setState({isModalVisible: false});
                this.props.getVariants(this.props.user.token);
                this.props.navigation.navigate('Bookcase');
            });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = (state) => {
    const { user } = state;
    return { user}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants, addVariant
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchResultScreen)