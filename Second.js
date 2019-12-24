import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Second = () => {
    return (
        <View>
            <Text
                onPress={() => Actions.first()}
            >Second Screen</Text>
        </View>
    )
}

export default Second;
