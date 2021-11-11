import React, { useEffect, useState } from 'react';
import { Container, DeckCard } from '../components';
import { FlatList } from 'react-native';
import { getDecks } from '../services/api';

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
            />
        </Container>
    )
}


export default DeckList