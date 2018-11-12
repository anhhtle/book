import React from 'React';
import { ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import GoBackHeader from 'book/screens/utility/GoBackHeader';
import ResultCard from './ResultCard';
import BookDetailModal from '../BookDetailModal'; 


class MyBooksDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <GoBackHeader title={'My books'} navigation={this.props.navigation} />

                {this.renderBookCards()}

                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    saveChanges={() => this.handleSaveChanges(this.props.variants[this.state.indexSelected].book._id)}
                    />

            </ScrollView>
        )
    }

    renderBookCards() {
        let arr = [];
        this.props.variants.forEach((variant, index) => {
            if (variant.status !== 'Recommended') {
                arr.push(<ResultCard variant={variant} key={variant._id} showModal={() => this.handleShowModal(index)} />)
            }
        });

        return arr;
    }
    handleShowModal(index) {
        this.setState({isModalVisible: true, indexSelected: index})
    }
    handleSaveChanges() {
        this.setState({isModalVisible: false})
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = (state) => {
    const { variants } = state
    return { variants }
};
  
export default connect(mapStateToProps)(MyBooksDetailedScreen);