import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Container } from '../components';
import { getDeck, deleteDeck } from '../services/api';
import { white, red } from '../utils';

const DeckDetails = ({ route, navigation }) => {
    const { title } = route.params;
    const [deck, setDeck] = useState('')

    useEffect(() => {
        getDeck(title)
            .then(res => setDeck(res))
    })

    function addCard() {
        navigation.navigate('Add Card', { deck: title })
    }

    function startQuiz() {
        navigation.navigate('Quiz', { deck: title })
    }

    function removeDeck() {
        deleteDeck(title)
            .then(() => {
                navigation.navigate('Decks', { deck: title })
            })
    }

    return (
        <Container>
            <View style={styles.container}>
                <View style={[styles.row, { marginTop: 80 }]}>
                    <Text style={styles.heading}>{deck?.title || 'title N/A'}</Text>
                    <Text style={styles.description}>{deck.cards?.length || (0)} cards</Text>
                </View>

                <View style={styles.row}>
                    <Button
                        text="add card"
                        type="secondary"
                        onPress={() => addCard()}
                    />
                    <Button
                        text="start quiz"
                        onPress={() => startQuiz()}
                    />
                </View>

                <View style={styles.row}>
                    <TouchableOpacity onPress={() => removeDeck()}>
                        <Text style={styles.deleteBtn}>delete deck</Text>
                    </TouchableOpacity>
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
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        color: white,
        fontSize: 28,
    },
    deleteBtn: {
        color: red,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default DeckDetails;