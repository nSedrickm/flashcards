import React from 'react';
import { Container, DeckCard } from '../components';
import { View } from 'react-native';

const DeckList = ({ navigation }) => {

    function viewDetails(title) {
        navigation.navigate('Deck Details', { title })
    }

    return (
        <Container>
            <View>
                <DeckCard
                    title="First Deck"
                    cards={4}
                    onPress={() => viewDetails("First Deck")}
                />
                <DeckCard
                    title="Second Deck"
                    cards={2}
                    onPress={() => viewDetails("Second Deck")}
                />
            </View>
        </Container>
    )
}


export default DeckList