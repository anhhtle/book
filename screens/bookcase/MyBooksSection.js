import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// component
import BookCard from 'book/screens/utility/BookCard';

class MyBooksSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>My books</Text>

                    <Text style={styles.browseLink}>Browse all...</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalBooksContainer}>
                        {this.renderBooks()}
                    </View>

                </ScrollView>
                
            </View>
        );
    }

    renderBooks() {
        let arr = [];
        this.props.variants.map(item => {
            arr.push(<BookCard book={item.book} key={item._id} />)
        })

        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        backgroundColor: '#8c1515',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    browseLink: {
        color: '#fff',
        fontWeight: 'bold'
    },
    horizontalBooksContainer: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
});

const mapStateToProps = (state) => {
    const { user, variants } = state
    return { user, variants }
};
  
export default connect(mapStateToProps)(MyBooksSection);