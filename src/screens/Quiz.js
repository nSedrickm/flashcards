import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container, QuizCard } from '../components';
import { getDeck } from '../services/api';
import { red, white, formatQuiz } from '../utils';

const Quiz = ({ route, navigation }) => {
    const { deck } = route.params;
    const [complete, setComplete] = useState(false);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState([]);

    function closeQuiz() {
        navigation.navigate('Deck Details', { title: deck })
    }

    function scoreQuestion(solution) {
        // calculate score
        const nextQuestion = current + 1;
        const { isCorrect } = quiz[current]
        if (solution && isCorrect) {
            setScore(score + 1);
        }
        if (nextQuestion < quiz.length) {
            setCurrent(nextQuestion);
        } else {
            setComplete(true);
        }
    }

    useEffect(() => {
        getDeck(deck)
            .then(res => {
                setQuiz(res.cards);
            })
    }, [])


    return (
        <Container>
            <View style={styles.container}>
                {!complete ? (
                    <View>
                        <Text style={styles.description}>{current + 1}/{quiz?.length}</Text>
                        {quiz.length ? (
                            <QuizCard
                                card={quiz[current]}
                                answerFunc={scoreQuestion}
                            />
                        ) : (
                            <View style={[styles.row, { marginTop: 25 }]}>
                                <Text style={styles.heading}>Quiz Loading</Text>
                            </View>
                        )}
                    </View>
                ) : (
                    <>
                        <View style={[styles.row, { marginTop: 25 }]}>
                            <Text style={styles.heading}>Quiz Completed</Text>
                            <Text style={styles.description}>You scored</Text>
                            <Text style={styles.score}>{score}/{quiz?.length}</Text>
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
    score: {
        color: white,
        fontSize: 56,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
});

export default Quiz;