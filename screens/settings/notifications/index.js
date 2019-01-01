import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Switch } from 'react-native-switch';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSetting } from 'thebooksjourney/redux//actions/user';

import GoBackHeader from 'thebooksjourney/screens/utility/GoBackHeader';

class NotificationSettingsScreen extends Component {
    constructor (props) {
        super(props);

        this.state = {
            push_book_requests: this.props.user.setting.push_notifications.book_requests,
            push_friend_requests: this.props.user.setting.push_notifications.friend_requests,
            push_book_recommendations: this.props.user.setting.push_notifications.book_recommendations,
            email_book_requests: this.props.user.setting.email_notifications.book_requests,
            email_news: this.props.user.setting.email_notifications.news,
        }

        this.handleUpdateState = this.handleUpdateState.bind(this);
        this.handleSaveSetting = this.handleSaveSetting.bind(this);
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
                            value={this.state.push_book_requests}
                            onValueChange={(val) => this.handleUpdateState('push_book_requests', val)}
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
                            value={this.state.push_friend_requests}
                            onValueChange={(val) => this.handleUpdateState('push_friend_requests', val)}
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
                            value={this.state.push_book_recommendations}
                            onValueChange={(val) => this.handleUpdateState('push_book_recommendations', val)}
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
                    <Text style={styles.header}>E-mail</Text>

                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Book requests</Text>
                        <Switch
                            value={this.state.email_book_requests}
                            onValueChange={(val) => this.handleUpdateState('email_book_requests', val)}
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
                            value={this.state.email_news}
                            onValueChange={(val) => this.handleUpdateState('email_news', val)}
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
    componentWillReceiveProps(nextProps) {
        this.setState({
            push_book_requests: nextProps.user.setting.push_notifications.book_requests,
            push_friend_requests: nextProps.user.setting.push_notifications.friend_requests,
            push_book_recommendations: nextProps.user.setting.push_notifications.book_recommendations,
            email_book_requests: nextProps.user.setting.email_notifications.book_requests,
            email_news: nextProps.user.setting.email_notifications.news,
        });
    }
    handleUpdateState(type, val) {
        const newState = {...this.state};
        newState[type] = val;
        this.setState(newState, 
            () => this.handleSaveSetting());
    }
    handleSaveSetting() {
        const saveObj = {
            setting_id: this.props.user.setting._id,
            push_notifications: {
                book_requests: this.state.push_book_requests,
                friend_requests: this.state.push_friend_requests,
                book_recommendations: this.state.push_book_recommendations
            },
            email_notifications: {
                book_requests: this.state.email_book_requests,
                news: this.state.email_news
            }
        }

        this.props.updateSetting(this.props.user.token, saveObj);
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
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateSetting
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSettingsScreen);