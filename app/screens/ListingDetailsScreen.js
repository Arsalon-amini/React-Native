import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText'; 
import colors from '../config/colors'; 

const ListingDetailsScreen = (props) => {
    return ( 
    <View style={styles.detailsContainer}>
        <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
        <AppText style={styles.title}> Red Jacket For Sale </AppText>
        <AppText style={styles.price}> $100 </AppText>
    </View> );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    }
})
 
export default ListingDetailsScreen;