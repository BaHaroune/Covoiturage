import React from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import styles from "./styles";
import CovTypeRow from "../covTypeRow";
import types from "../../assets/data/types";

const CovTypes = () => {
    const confirm = () => {
        console.warn('Confirmer')
    }
    return (
        <View style={{height: Dimensions.get('window').height - 417}}>
            {types.map((type) =>
            (
                <CovTypeRow key={type.id} type={type} />
            ))}

            <Pressable style={styles.btn} onPress={confirm}>
                <Text style={styles.btnText}>
                    Confirmer le traget
                </Text>
            </Pressable> 
        </View>
    )
}

export default CovTypes;