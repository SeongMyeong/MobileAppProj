import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import NavBar from './NavBar';
import FlexBoxBody from './FlexBoxBody';

export default class FlexBox extends Component {
    render() {
        return (
            <View style={styles.bodyContainer}>
                <NavBar />
                <FlexBoxBody />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
});