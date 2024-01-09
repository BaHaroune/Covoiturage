import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const RootNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <HomeNavigation/>
        </NavigationContainer>
    );
};

export default RootNavigation;
