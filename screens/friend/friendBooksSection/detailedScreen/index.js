import React from 'React';
import { ScrollView } from 'react-native';

// redux
import { connect } from 'react-redux';

import FriendGoBackHeader from '../../FriendGoBackHeader';
import BookCard from './BookCard';
import BookDetailModal from '../BookDetailModal'; 


class FriendBooksDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needModal: false,
            isModalVisible: false,
            indexSelected: null
        }
    }

    render () {
        return (
            <ScrollView>
                <FriendGoBackHeader title={this.props.variantsFriend.variantsFriend[0].user.first_name + ' ' + this.props.variantsFriend.variantsFriend[0].user.last_name +  `'s Books`} navigation={this.props.navigation} />

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
        if (this.props.variantsFriend.variantsFriend.length > 0) {
            indexSelected = 0;
        }
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
    }
    renderBookCards() {
        let arr = [];
        this.props.variantsFriend.variantsFriend.map((variant, index) => {
            arr.push(<BookCard variant={variant} key={variant._id} 
                showModal={() => this.handleShowModal(index)} 
            />)
        });

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variantsFriend.variantsFriend[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                />
            )
        } else {
            return null;
        }
    }
    handleShowModal(index) {
        this.setState({isModalVisible: true, indexSelected: index})
    }
}

const mapStateToProps = (state) => {
    const { variantsFriend } = state;
    return { variantsFriend }
}

export default connect(mapStateToProps)(FriendBooksDetailedScreen);