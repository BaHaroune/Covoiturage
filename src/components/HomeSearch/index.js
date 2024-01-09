import react from 'react';
import { Pressable, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
    const navigate = useNavigation();

    const goToSearch = () => {
        navigate.navigate("DestinationScreen");
    }
    return (
        <View>
            {/* Input box*/}
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where to ?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle' size={16} />
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16} />
                </View>
            </Pressable>

            {/* Previous destination */}

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name='clockcircle' size={20} />
                </View>
                <Text style={styles.destinationText}>Spin nightclub</Text>
            </View>

            {/* Home */}

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: 'blue'}]}>
                    <Entypo name='home' size={20} color='#fff' />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>

            {/* Home*/}
        </View>
    )
}

export default HomeSearch;