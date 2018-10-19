import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, Dimensions, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class AddressSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>
                    <View>
                        <Text style={styles.headerTitle}>Address</Text>
                        <Text style={styles.headerSubtitle}>Use for book exchange*</Text>
                    </View>
                </View>
                <View style={styles.body}>

                    {/* street */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.street}</Text>
                            <Text style={styles.label}>Street</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* city */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.city}</Text>
                            <Text style={styles.label}>City</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* state */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.state}</Text>
                            <Text style={styles.label}>State</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* zipcode */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.zipcode}</Text>
                            <Text style={styles.label}>Zipcode</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* country */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.country}</Text>
                            <Text style={styles.label}>Country</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* additional info */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.addtional_info}</Text>
                            <Text style={styles.label}>Additional Info</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        fontSize: 20,
        marginRight: 10
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    headerSubtitle: {
        fontSize: 12,
        color: 'grey'
    },

    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // field
    fieldContainer: {
        width: Dimensions.get('window').width,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: 'grey'
    },
    button: {
        width: 50,
        alignItems: 'center'
    }
});