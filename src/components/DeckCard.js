import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { white } from '../utils';
import propTypes from 'prop-types';

export const DeckCard = ({ title, cards, ...rest }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <View style={styles.row}>
                <Text style={styles.heading}>{title || "Card Title"}</Text>
                <Text style={styles.description}>({cards || 0}) cards</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: white,
        borderRadius: 10,
        marginBottom: 10,
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 18,
    }
});

DeckCard.propTypes = {
    title: PropTypes.string,
    cards: propTypes.number
}