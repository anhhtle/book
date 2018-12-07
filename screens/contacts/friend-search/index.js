import React from 'React';
import { Text, ScrollView, StyleSheet } from 'react-native';

import FriendsSearchResultHeader from './FriendsSearchResultHeader';
import ResultCard from './ResultCard'


export default class FriendsSearchResultScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data', 'No result')
        }

        this.updateState = this.updateState.bind(this);
    }

    render () {
        if (this.state.data.length === 0) {
            return (
                <ScrollView style={styles.container}>
                    <FriendsSearchResultHeader navigation={this.props.navigation} updateState={this.updateState}/>
                    <Text style={{alignSelf: 'center', marginTop: 30}}>No result</Text>
                </ScrollView>
            )
        }
                
        return (
            <ScrollView style={styles.container}>
                <FriendsSearchResultHeader navigation={this.props.navigation} updateState={this.updateState}/>

                { this.renderResultCards() }
            </ScrollView>
        )
    }
    componentWillReceiveProps(nextProps){
        this.setState({data: nextProps});
    }

    renderResultCards() {
        let arr = [];
        this.state.data.forEach((friend, index) => {
            arr.push(<ResultCard friend={friend} key={index} />)
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