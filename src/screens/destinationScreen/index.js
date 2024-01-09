import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesRow from "./PlacesRow";
import { useNavigation } from "@react-navigation/native";

navigator.geolocation = require('@react-native-community/geolocation');

const DestinationSearche = () => {
    const [originPlace, setoriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigate = useNavigation();

    useEffect(() => {
        console.warn('UseEffect');
        if (originPlace && destinationPlace) {
            navigate.navigate("SearchResult", {
                originPlace: originPlace,
                destinationPlace: destinationPlace
            });
        }
    }, [originPlace, destinationPlace])
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="From"
                currentLocation={true}
                currentLocationLabel="Current location"
                onPress={(data, details = null) => {
                    // 'details' isprovided when fetchDetails = true
                    setoriginPlace(data, details);
                }}
                query={{
                    key: 'AIzaSyAL3mQaSpVSRrnoVpqg8Y_v82Uhf_4duyk',
                    language: 'en',
                }}
                onError={(error) => console.log(error)}
                onFail={e => console.log(e)}
                enablePoweredByContainer={false}
                suppressDefaultStyles

                styles={{
                    container: styles.autocompleteContainer,
                    textInput: styles.textInput,
                    listView: styles.listView,
                    separator: styles.separator,
                }}

                renderRow={(data) => <PlacesRow data={data} />}
                renderDescription={(data) => data.description || data.vicinity}
            />

            <GooglePlacesAutocomplete
                placeholder="Where to?"
                onPress={(data, details = null) => {
                    // 'details' isprovided when fetchDetails = true
                    setDestinationPlace(data, details);
                }}
                query={{
                    key: 'AIzaSyAL3mQaSpVSRrnoVpqg8Y_v82Uhf_4duyk',
                    language: 'en',
                }}
                onError={(error) => console.log(error)}
                onFail={e => console.log(e)}
                enablePoweredByContainer={false}
                suppressDefaultStyles

                styles={{
                    container: { ...styles.autocompleteContainer, top: 55 },
                    textInput: styles.textInput,
                    separator: styles.separator
                }}

                renderRow={(data) => <PlacesRow data={data} />}
            />

            {/* Cercle cote de origin Input */}
            <View style={styles.cercle} />

            {/* ligne cote de origin/destination Inputs */}
            <View style={styles.line} />

            {/* Carre cote de destination Input */}
            <View style={styles.square} />
        </View>
    )
}

export default DestinationSearche;