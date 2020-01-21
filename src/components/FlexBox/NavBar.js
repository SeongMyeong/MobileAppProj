import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class NavBar extends Component {
    render() {
        return (
            <View style={styles.naviBox}>
                <Text>
                    NavBar
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    naviBox: {
        flex: 0.1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
});