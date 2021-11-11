import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDecks } from '../utils';
const APP_STORAGE_KEY = '@flashcards_storage';
/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
*/

export async function saveDeckTitle(title) {
    try {
        const jsonValue = JSON.stringify({
            [title]: {
                title: title,
                cards: []
            }
        })
        await AsyncStorage.mergeItem(APP_STORAGE_KEY, jsonValue)
    } catch (error) {
        console.error(error)
    }
}

export async function saveCardToDeck(title, card) {
    try {
        // get the stored data
        const store = await AsyncStorage.getItem(APP_STORAGE_KEY);
        const data = JSON.parse(store);
        // append new card
        data[title].cards.push(card)
        // update store
        await AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}

export async function getDecks() {
    try {
        const store = await AsyncStorage.getItem(APP_STORAGE_KEY);
        const data = JSON.parse(store)
        return data != null ? formatDecks(data) : null;
    } catch (error) {
        console.error(error)
    }
}

export async function getDeck(title) {
    try {
        const store = await AsyncStorage.getItem(APP_STORAGE_KEY);
        const data = JSON.parse(store)
        return data[title];
    } catch (error) {
        console.error(error)
    }
}

export async function deleteDeck(title) {
    try {
        // get the stored data
        const store = await AsyncStorage.getItem(APP_STORAGE_KEY);
        const data = JSON.parse(store);
        // remove card
        delete data[title];
        // update store
        await AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}

export async function clearStorage() {
    try {
        await AsyncStorage.clear()
    } catch (error) {
        console.error(error)
    }
}