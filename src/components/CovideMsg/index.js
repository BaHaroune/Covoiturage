import react from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const CovideMsg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>For further information related to covide, please check the link below. Yes please check it</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovideMsg;