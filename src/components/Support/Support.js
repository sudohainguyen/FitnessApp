import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity 
} from 'react-native';

export default class Support extends Component {
    render() {
        const { container, input, button, text } = styles;
        return (
            <View style={container}>
                <TextInput 
                    placeholder='E-mail'
                    placeholderTextColor='#9C9494'
                    style={input}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    returnKeyType={'done'}
                />
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={button}>
                        <Text style={text}>CONTACT US</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 13,
        color: '#9C9494',
        fontSize: 30,
    },
    button: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F66D6A',
        borderRadius: 100,
        marginTop: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: '300',
        color: '#FFF',
    }
});
