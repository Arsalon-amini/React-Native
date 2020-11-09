import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/Text'; 
import colors from '../config/colors'; 
import ListItem from '../components/lists/ListItem';

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params; 

    return ( 
    <View style={styles.detailsContainer}>
        <Image style={styles.image} source={listing.image}/>
        <AppText style={styles.title}> {listing.title} </AppText>
        <AppText style={styles.price}> ${listing.price} </AppText>
        <View style={styles.userContainer}>
            <ListItem 
                image={require("../assets/headshot.jpg")}
                title="Arsalon A."
                subTitle="8 listings"
            />
        </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
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
    },
    userContainer: {
        marginVertical: 40
    }
})
 
export default ListingDetailsScreen;