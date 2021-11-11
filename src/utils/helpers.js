// utils to format and structure data

export function formatDecks(decks) {

    let data = [];
    Object.values(decks).map((deck) =>
        data.push({
            title: deck.title,
            cards: deck.cards.length || 0
        })
    );
    
    // sort decks
    data.sort((a, b) => b.score - a.score);
    return data;
}