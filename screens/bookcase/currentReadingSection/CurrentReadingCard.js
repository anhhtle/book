import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ModalDropdown from 'react-native-modal-dropdown';

export default class CurrentReadingCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            dropdownOptions: ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],

            progress: this.props.variant.progress
        }

        this.handleProgressDropdown = this.handleProgressDropdown.bind(this);
    }

    render () {
        let variant = this.props.variant;

        return (
            <View style={styles.container}>
                <View style={styles.bookDetail}>
                    <Text style={styles.title}>{variant.book.title}</Text>
                    <Text style={styles.author}>{variant.book.authors[0]}</Text>
                </View>

                <ModalDropdown 
                    ref={'progressDropdown'}
                    options={this.state.dropdownOptions}
                    defaultValue={this.state.progress + '%'}
                    animated={false}
                    style={{marginRight: 10}}
                    textStyle={{color: '#4885ed', fontSize: 18}}
                    onSelect={(value) => this.handleProgressDropdown(value * 10) }
                />

                <TouchableOpacity style={styles.removeButton} onPress={() => this.props.removeBook(this.props.variant._id)}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-remove' : 'md-remove'} color={'red'} size={24}/>
                </TouchableOpacity>
            </View>
        )
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.variant) {
            this.setState({progress: nextProps.variant.progress});

            let progressArr = [0,10,20,30,40,50,60,70,80,90,100];
            this.refs.progressDropdown.select(progressArr.indexOf(nextProps.variant.progress));
        }
    }

    handleProgressDropdown(value) {
        this.props.changeBookProgress(this.props.variant._id, value) 
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    bookDetail: {
        flex: 1
    },
    author: {
        fontWeight: 'bold'
    },
    progressDropdown: {
        marginRight: 5,
        padding: 5
    },
    progress: {
        fontSize: 20,
        color: '#4885ed',
    },
    removeButton: {
        width: 35,
        alignItems: 'center',
    },

    // modal
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 10,
        width: 200
    }
});