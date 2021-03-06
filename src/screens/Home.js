import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { gray, yellow } from '../utils';
import { setNotification } from '../services/notifications';
import DeckList from './DeckList'
import AddDeck from './AddDeck';

const Tab = createBottomTabNavigator();

const Home = () => {

    useEffect(() => {
        setNotification();
    }, [])

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: yellow,
                tabBarInactiveTintColor: gray,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="Decks"
                component={DeckList}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <MaterialCommunityIcons
                                name="cards"
                                size={32}
                                color={tabInfo.focused ? yellow : gray}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Add Deck"
                component={AddDeck}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return (
                            <AntDesign
                                name="pluscircleo"
                                size={24}
                                color={tabInfo.focused ? yellow : gray}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default Home