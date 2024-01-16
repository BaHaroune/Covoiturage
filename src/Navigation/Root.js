import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import CustomDrawer from './CustomDrawer';

const RootNavigation = () => {
    const Drawer = createDrawerNavigator();

    const DummyScreen = (props) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{props.name}</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
                <Drawer.Screen name='Home' component={HomeNavigation} />
                <Drawer.Screen name='Your trips'>
                    {() => <DummyScreen name={"Your trips"} />}
                </Drawer.Screen>
                <Drawer.Screen name='Help'>
                    {() => <DummyScreen name="Help" />}
                </Drawer.Screen>
                <Drawer.Screen name='Settings'>
                    {() => <DummyScreen name="Settings" />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
