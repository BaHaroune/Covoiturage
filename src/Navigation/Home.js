import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen';
import DestinationScreen from '../screens/destinationScreen';
import SearchResult from '../screens/searchResult';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
    );
};

export default HomeNavigation;
