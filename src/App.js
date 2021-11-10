import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, DeckDetails, AddCard, Quiz } from './screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Deck Details"
          component={DeckDetails}
        />
        <Stack.Screen
          name="Add Card"
          component={AddCard}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


