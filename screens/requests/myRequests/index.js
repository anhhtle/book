import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';
import CurrentRequestsSection from './currentRequestsSection';
import EarlierRequestsSection from './earlierRequestsSection';


export default class MyRequestsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render () {
        return (
            <ScrollView style={styles.container}>
                <GoBackHeader title={"Your Requests"} navigation={this.props.navigation} destination={'Home'} />

                <CurrentRequestsSection />
                <EarlierRequestsSection />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
