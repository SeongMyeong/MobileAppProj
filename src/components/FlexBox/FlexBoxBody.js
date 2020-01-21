import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default class FlexBoxBody extends Component {
    render() {
        return (
            <View style={styles.baseContainer}>
                <View style={styles.leftContent}>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.rightTopContent}>
                    </View>
                    <View style={styles.rightBottomContent}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },

    rightContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    leftContent: {
        flex: 0.4,
        backgroundColor: 'red',
        width: '50%'
    },

    rightTopContent: {
        flex: 0.4,
        backgroundColor: 'blue'
    },

    rightBottomContent: {
        flex: 0.6,
        backgroundColor: 'yellow'
    }
});