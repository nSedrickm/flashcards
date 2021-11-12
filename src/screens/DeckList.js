import React, { useEffect, useState } from 'react';
import { Container, DeckCard } from '../components';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDecks } from '../services/api';
import { white } from '../utils';

const DeckList = ({ navigation }) => {

    const [decks, setDecks] = useState([]);

    useEffect(() => {
        getDecks()
            .then(res => setDecks(res))
    })

    function viewDetails(title) {
        navigation.navigate('Deck Details', { title })
    }

    return (
        <Container>
            {decks?.length ? (
                <FlatList
                    data={decks}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <DeckCard
                            title={item.title}
                            cards={item.cards}
                            onPress={() => viewDetails(item.title)}
                        />
                    )}
                />) : (
                <View style={styles.container}>
                    <MaterialCommunityIcons name="cards-outline" size={128} color={white} />
                    <Text style={styles.heading}>No decks</Text>
                    <Text style={styles.description}>Add One to get started</Text>
                </View>
            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: white,
        height: 300
    },
    heading: {
        color: white,
        fontSize: 36,
        fontWeight: 'bold'
    },
    description: {
        color: white,
    },
})


export default DeckList