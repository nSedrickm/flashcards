import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
import { Button, Container } from '../components';
import { lightGray, white } from '../utils';

const AddCard = ({ route, navigation }) => {
    const { deck } = route.params;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    function handleCreateCard() {
        alert(JSON.stringify({
            question,
            answer,
            deck
        }));
    }

    return (
        <Container>
            <SafeAreaView style={styles.container}>
                <View style={[styles.row, { marginTop: 20 }]}>
                    <Text style={styles.heading}>Add Card</Text>
                    <Text style={styles.description}>Please fill in details for the card</Text>
                </View>
                <View style={[styles.row, { marginTop: 40, marginBottom: 20 }]}>
                    <Text style={styles.label}>Question</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setQuestion}
                        value={question}
                        placeholderTextColor={lightGray}
                        placeholder="Question"
                    />
                </View>

                <View style={[styles.row, { marginBottom: 40 }]}>
                    <Text style={styles.label}>Answer</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setAnswer}
                        value={answer}
                        placeholderTextColor={lightGray}
                        placeholder="Answer"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="add"
                        onPress={() => handleCreateCard()}
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
    },
    label: {
        alignSelf: 'flex-start',
        color: white,
        marginBottom: 5
    }
})

export default AddCard;