import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const First = () => {
    return (
        <View>
            <Text
                onPress={() => Actions.second()}
            >First Screen</Text>
        </View>
    )
}

export default First;
