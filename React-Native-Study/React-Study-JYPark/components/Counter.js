import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>0</Text>
            </View>
            <Button title="+1" />
            <Button title="-1" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    numberArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 72,
        fontWeight: 'bold',
    },
});

