import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container, QuizCard } from '../components';
import { red, white } from '../utils';

const Quiz = ({ route, navigation }) => {
    const { deck } = route.params;
    const [complete, setComplete] = useState(false)

    function closeQuiz() {
        navigation.navigate('Deck Details', { title: deck })
    }

    return (
        <Container>
            <View style={styles.container}>
                {!complete ? (
                    <View>
                        <Text style={styles.description}>3/7</Text>
                        <QuizCard />
                    </View>
                ) : (
                    <>
                        <View style={[styles.row, { marginTop: 25 }]}>
                            <Text style={styles.heading}>Quiz Completed</Text>
                        </View>

                        <View style={styles.row}>
                            <Button
                                text="close"
                                onPress={() => closeQuiz()}
                            />
                        </View>
                    </>
                )}
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        textAlign: 'center'
    },
    toggle: {
        color: red,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Quiz;