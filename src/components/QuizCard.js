import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { white, red } from '../utils';
import { Button } from './Button';

export const QuizCard = () => {
    const [toggle, setToggle] = useState(false)

    function toggleAnswer() {
        setToggle(!toggle);
    }

    return (
        <View style={styles.container}>
            {toggle ? (
                <View style={[styles.row, { marginTop: 25 }]}>
                    <Text style={styles.heading}>Question Question Question</Text>
                    <TouchableOpacity onPress={() => toggleAnswer()}>
                        <Text style={styles.toggle}>{toggle ? "View Answer" : "View Question"}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={[styles.row, { marginTop: 25 }]}>
                    <Text style={styles.heading}>Answer</Text>
                    <TouchableOpacity onPress={() => toggleAnswer()}>
                        <Text style={styles.toggle}>{"View Question"}</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.row}>
                <Button
                    text="incorrect"
                    type="secondary"
                />
                <Button
                    text="correct"
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
