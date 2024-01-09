import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import cars from '../../assets/data/cars'

const HomeMap = () => {
    const getImage = (type) => {
        if (type === 'Corrola') {
            return require('../../assets/images/top-UberX.png')
        }
        if (type.type === 'Tx') {
            return require('../../assets/images/top-UberXL.png')
        }
        return require('../../assets/images/top-Comfort.png')
    }
    return (
        <MapView
            style={{ height: 417, width: '100%' }}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
            showsUserLocation={true}
        >
            {cars.map((car) => (
                <Marker
                    key={car.id}
                    coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                >
                    <Image
                        style={{ height: 40, width: 70, resizeMode: 'contain' }}
                        source={getImage(car.type)}
                    />
                </Marker>
            ))}
        </MapView>
    )
}

export default HomeMap;