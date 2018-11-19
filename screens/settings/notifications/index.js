import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Switch } from 'react-native-switch';

import { connect } from 'react-redux';

import GoBackHeader from 'book/screens/utility/GoBackHeader';

class NotificationSettingsScreen extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <GoBackHeader title={'Notification Settings'} navigation={this.props.navigation} style={{ marginBottom: 35 }}/>

                <View style={{padding: 10}}>
                    {/* push notifications */}
                    <Text style={styles.header}>Push notifications</Text>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Book requests</Text>
                        <Switch
                            value={this.props.settings.push_notifications.book_requests}
                            onValueChange={(val) => console.log(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Friend requests</Text>
                        <Switch
                            value={this.props.settings.push_notifications.friend_requests}
                            onValueChange={(val) => console.log(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Book recommendations</Text>
                        <Switch
                            value={this.props.settings.push_notifications.book_recommendations}
                            onValueChange={(val) => console.log(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />
                    </View>

                    {/* email */}
                    <Text style={styles.header}>Push notifications</Text>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Book requests</Text>
                        <Switch
                            value={this.props.settings.email_notifications.book_requests}
                            onValueChange={(val) => console.log(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>News</Text>
                        <Switch
                            value={this.props.settings.email_notifications.news}
                            onValueChange={(val) => console.log(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />
                    </View>
                   

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginVertical: 20,
        color: '#8c1515',
        fontSize: 18
    },
    label: {
        fontSize: 16
    },
    switchContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
});

const mapStateToProps = (state) => {
    const { settings } = state
    return { settings }
};

export default connect(mapStateToProps)(NotificationSettingsScreen);