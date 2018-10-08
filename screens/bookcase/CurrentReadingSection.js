import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeBookStatus } from 'book/redux/actions';

import CurrentReadingCard from './CurrentReadingCard';

class CurrentReadingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBooksArr: [
                {
                    title: 'Harry: A biography of a Prince',
                    authors: ['Angela Levin'],
                    progress: 70
                },
                {
                    title: 'Harry: A biography of a Prince2',
                    authors: ['Angela Levin'],
                    progress: 50
                },
                {
                    title: 'Harry: A biography of a Prince3',
                    authors: ['Angela Levin'],
                    progress: 90
                },
            ]
        }

        this.handleRemoveBook = this.handleRemoveBook.bind(this);
        this.handleChangeBookProgress = this.handleChangeBookProgress.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Current reading</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} color={'#fff'} size={24}/>
                    </TouchableOpacity>
                </View>

                {this.renderBooks()}
            </View>
        )
    }

    renderBooks () {
        let arr = [];
        this.props.books.forEach((item, index) => {
            if(item.status === 'Reading') {
                arr.push(<CurrentReadingCard book={item} key={index} index={index} removeBook={this.handleRemoveBook} changeBookProgress={this.handleChangeBookProgress} />);
            }
        });

        return arr;
    }

    handleRemoveBook (index) {
        // let newArr = this.props.books.currentBooksArr.slice();
        // newArr.splice(index, 1)

        // this.setState({currentBooksArr: newArr});

        this.props.changeBookStatus(index, 'Started');
    }

    handleChangeBookProgress (newProgress, index) {
        let newArr = this.state.currentBooksArr.slice();
        newArr[index].progress = newProgress;

        this.setState({currentBooksArr: newArr});
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#8c1515',
    },
    headerTitle: {
        flex: 1,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    addButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 3,
        marginRight: 5
    },
});

const mapStateToProps = (state) => {
    const { books } = state.user
    return {books}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeBookStatus,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrentReadingSection);