import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DestinationSearche from '../screens/destinationScreen';

const RootNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeNavigation} />
                <Drawer.Screen name='Destination' component={DestinationSearche} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
