import React from "react";
import {View, Text} from 'react-native';
import HomeMap from "../../components/HomeMap";
import CovideMsg from "../../components/CovideMsg";
import HomeSearch from "../../components/HomeSearch";


const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <CovideMsg />
            <HomeSearch/>
        </View>
    )
}

export default HomeScreen;