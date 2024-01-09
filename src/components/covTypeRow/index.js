import React from "react";
import { Image, Text, View } from 'react-native';
import styles from "./styles";
import IonIcons from 'react-native-vector-icons/Ionicons';

const CovTypeRow = (props) => {
    const {type} = props;

    const getImage = () => {
        if(type.type === 'Corrola') {
            return require('../../assets/images/Corrola.jpeg')
        }
        if(type.type === 'Tx') {
            return require('../../assets/images/Tx.jpeg')
        }
        return require('../../assets/images/Rav4.jpeg')
    }

    return (
        <View style={styles.container}>
            <Image 
                source={getImage()} 
                style={styles.image}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} {' '}
                    <IonIcons name='person' size={15} />
                    3
                </Text>

                <Text style={styles.time}>
                    {type.duration} h
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <IonIcons name="pricetag" size={18} color='#00ff00' />
                <Text style={styles.price}>
                    prix : {type.price} mro
                </Text>
            </View>
        </View>
    )
}

export default CovTypeRow;