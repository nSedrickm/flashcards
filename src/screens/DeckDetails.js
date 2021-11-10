import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container } from '../components';
import { white } from '../utils';

const DeckDetails = ({ route, navigation }) => {
    const { title } = route.params;

    function addCard(title) {
        navigation.navigate('Add Card', { deck: title })
    }

    function startQuiz(title) {
        navigation.navigate('Quiz', { deck: title })
    }

    return (
        <Container>
            <View style={styles.container}>
                <View style={[styles.row, { marginTop: 80 }]}>
                    <Text style={styles.heading}>{title}</Text>
                    <Text style={styles.description}>(0) cards</Text>
                </View>

                <View style={styles.row}>
                    <Button
                        text="add card"
                        type="secondary"
                        onPress={() => addCard(title)}
                    />
                    <Button
                        text="start quiz"
                        onPress={() => startQuiz(title)}
                    />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: white,
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        color: white,
        fontSize: 24,
    }
})

export default DeckDetails;