import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { white, red } from '../utils';
import { Button } from './Button';
import PropTypes from 'prop-types';

export const QuizCard = ({ card, answerFunc }) => {
    const { question, answer } = card;
    const [toggle, setToggle] = useState(false)

    function toggleAnswer() {
        setToggle(!toggle);
    }

    return (
        <View style={styles.container}>
            {!toggle ? (
                <View style={[styles.row, { marginTop: 25 }]}>
                    <Text style={styles.heading}>{question}</Text>
                    <TouchableOpacity onPress={() => toggleAnswer()}>
                        <Text style={styles.toggle}>View Answer</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={[styles.row, { marginTop: 25 }]}>
                    <Text style={styles.heading}>{answer}</Text>
                    <TouchableOpacity onPress={() => toggleAnswer()}>
                        <Text style={styles.toggle}>View Question</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.row}>
                <Button
                    text="incorrect"
                    type="secondary"
                    onPress={() => answerFunc(false)}
                />
                <Button
                    text="correct"
                    onPress={() => answerFunc(true)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: white,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    description: {
        color: white,
        fontSize: 24,
    },
    toggle: {
        color: red,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

QuizCard.propTypes = {
    card: PropTypes.object.isRequired,
    answerFunc: PropTypes.func.isRequired
}