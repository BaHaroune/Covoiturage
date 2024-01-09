import React from "react";
import { View } from 'react-native';
import RouteMap from "../../components/RouteMap";
import CovTypes from "../../components/covTypes";
import { useRoute } from "@react-navigation/native";

const SearchResult = () => {

    const Route = useRoute();

    console.warn(Route.params);
    return (
        <View >
            <RouteMap />
            <CovTypes />
        </View>
    )
}

export default SearchResult;