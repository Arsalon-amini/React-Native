import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors'; 
import Text from './Text';

const Card = ({title, subTitle, imageUrl, onPress }) => {
return ( 
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.subTitle} numberOfLines={1} >{subTitle}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer:{
        padding: 20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7
    }
})
 
export default Card;