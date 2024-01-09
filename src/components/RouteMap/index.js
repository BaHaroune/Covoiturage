import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const HomeMap = () => {
    const origin = {
        latitude: 28.450626,
        longitude: -16.263045
    }

    const destination = {
        latitude: 28.450827,
        longitude: -16.569585
    }

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAL3mQaSpVSRrnoVpqg8Y_v82Uhf_4duyk';
    return (
        <MapView
            style={{ height: 417, width: '100%' }}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.1021,
            }}
            showsUserLocation={true}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="red"
            />
            <Marker
                coordinate={origin}
                title={'origin'}
            />

            <Marker
                coordinate={destination}
                title={'destination'}
            />
        </MapView>
    )
}

export default HomeMap;