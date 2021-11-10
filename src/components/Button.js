import propTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white, yellow } from '../utils';

export const Button = ({ text, type, ...rest }) => {
    return (

        <TouchableOpacity
            style={[styles.button, type === 'secondary' ? styles.secondary : styles.primary]}
            {...rest}
        >
            <Text
                style={[styles.buttonText, type === 'secondary' ? { color: yellow } : { color: white }]}
            >
                {text || "Button"}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        margin: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    primary: {
        backgroundColor: yellow,
        color: white,
    },
    secondary: {
        borderWidth: 1,
        borderColor: yellow,
        color: yellow,
        fontSize: 20,
        fontWeight: 'bold'
    }
});


Button.propTypes = {
    text: propTypes.string.isRequired,
    type: propTypes.oneOf(['primary', 'secondary'])
}
