import React from 'React';
import { ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants, updateVariant, deleteVariant } from 'thebooksjourney/redux//actions/variant';

import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';
import BookCard from './BookCard';
import WatchlistBookModal from '../WatchlistBookModal'; 


class WatchlistBooksDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needModal: false,
            isModalVisible: false,
            indexSelected: null
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <GoBackHeader title={'Watchlist'} navigation={this.props.navigation} />

                {this.renderBookCards()}

                {this.renderModal()}

            </ScrollView>
        )
    }
    componentDidMount() {
        this.setModalIndex();
    }
    componentWillReceiveProps() {
        this.setModalIndex();
    }
    setModalIndex() {
        let indexSelected = null;
        this.props.variants.variants.map((item, index) => {
            if (item.status === 'Watchlist') {
                indexSelected = index;
            }
        });
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
    }
    renderBookCards() {
        let arr = [];
        this.props.variants.variants.forEach((variant, index) => {
            if (variant.status === 'Watchlist') {
                arr.push(<BookCard variant={variant} key={variant._id} showModal={() => this.handleShowModal(index)} />)
            }
        });

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <WatchlistBookModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    saveChanges={this.handleSaveChanges}
                    delete={this.handleDelete}
                />
            )
        } else {
            return null;
        }
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
    handleSaveChanges() {
        this.setState({isModalVisible: false});
    }
    handleDelete(id) {
        this.props.deleteVariant(this.props.user.token, id)
        .then(() => {
                this.setState({isModalVisible: false});
                this.props.getVariants(this.props.user.token);
            });
            
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = (state) => {
    const { user, variants } = state;
    return { user, variants }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants, updateVariant, deleteVariant
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(WatchlistBooksDetailedScreen);