import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button, Container } from '../components';
import { saveCardToDeck } from '../services/api';
import { lightGray, white } from '../utils';

const AddCard = ({ route, navigation }) => {
    const { deck } = route.params;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [affirmation, setAffirmation] = useState(false);

    function handleCreateCard() {

        const card = {
            question: question,
            answer: answer,
            isCorrect: affirmation
        }

        // input validation
        // check if both options are filled first
        if (question && answer) {
            // make sure they are unique
            if (question === answer) {
                alert("please fill in different options")
            } else {
                saveCardToDeck(deck, card)
                    .then(() => {
                        setQuestion('');
                        setAnswer('');
                        navigation.navigate('Deck Details', { title: deck });
                    });
            }
        } else {
            alert("Please fill both question and answer options");
        }
    }

    return (
        <Container>
            <View style={styles.container}>
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

                <View style={[styles.row, { marginBottom: 40 }]}>
                    <Text style={styles.label}>Is the answer correct?</Text>
                    <TouchableOpacity style={styles.picker}>
                        <Picker
                            style={{ color: white }}
                            selectedValue={affirmation}
                            onValueChange={(value) =>
                                setAffirmation(value)
                            }>
                            <Picker.Item label="Yes" value={true} />
                            <Picker.Item label="No" value={false} />
                        </Picker>
                    </TouchableOpacity>

                </View>

                <View style={styles.row}>
                    <Button
                        text="add"
                        onPress={() => handleCreateCard()}
                    />
                </View>
            </View>
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
    },
    picker: {
        borderWidth: 1,
        borderColor: white,
        borderRadius: 10,
        width: 300
    },
})

export default AddCard;