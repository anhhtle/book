import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

// redux
import { connect } from 'react-redux';

import CurrentReadingCard from './CurrentReadingCard';

class CurrentReadingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderComponent: false
        }
    }

    render () {
        if (this.state.renderComponent) {
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Current reading</Text>
                    </View>
    
                    {this.renderBooks()}
                </View>
            )
        } 

        return <View style={styles.container}></View>;
    }
    componentDidMount () {
        let renderComponent = false;
        this.props.variantsFriend.variantsFriend.map(variant => {
            if (variant.status === 'Reading') {
                renderComponent = true;
            }
        })
        this.setState({renderComponent})
    }
    renderBooks () {
        let arr = [];
        this.props.variantsFriend.variantsFriend.forEach((item, index) => {
            if(item.status === 'Reading') {
                arr.push(<CurrentReadingCard variant={item} key={index} index={index} />);
            }
        });

        return arr;
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

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 10,
        width: Dimensions.get('window').width * 0.9
    },
});

const mapStateToProps = (state) => {
    const { variantsFriend } = state
    return { variantsFriend }
};

export default connect(mapStateToProps)(CurrentReadingSection);