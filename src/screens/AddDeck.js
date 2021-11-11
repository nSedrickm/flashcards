import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
import { Button, Container } from '../components';
import { lightGray, white } from '../utils';
import { saveDeckTitle } from '../services/api';

const NewDeck = ({ navigation }) => {
    const [text, setText] = useState('');

    function handleCreateDeck() {
        if (text) {
            saveDeckTitle(text)
                .then(() => {
                    setText('');
                    navigation.navigate('Deck Details', { title: text });
                });

        } else {
            alert('Please fill in deck name')
        }
    }

    return (
        <Container>
            <SafeAreaView style={styles.container}>
                <View style={[styles.row, { marginTop: 20 }]}>
                    <Text style={styles.heading}>New Deck</Text>
                    <Text style={styles.description}>Please fill in Deck name</Text>
                </View>
                <View style={[styles.row, { marginTop: 40, marginBottom: 40 }]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder="deck name"
                        placeholderTextColor={lightGray}
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="add"
                        onPress={() => handleCreateDeck()}
                    />
                </View>
            </SafeAreaView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: white,
        padding: 10,
        color: white,
        borderRadius: 10,
        width: 300
    }
})

export default NewDeck;