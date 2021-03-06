import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache'; 

import Text from '../components/Text'; 
import colors from '../config/colors'; 
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params; 

    return ( 
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 100 }
        >
            <Image 
                preview ={listing.images[0].uri} 
                style={styles.image}
                tint='light'
                uri={listing.images[0].url}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}> {listing.title} </Text>
                <Text style={styles.price}> ${listing.price} </Text>
                    <View style={styles.userContainer}>
                        <ListItem 
                            image={require("../assets/headshot.jpg")}
                            title="Arsalon A."
                            subTitle="8 listings"
                        />
                    </View> 
                </View>
                <View>
                    <ContactSellerForm listing={listing}/>
                </View>
        </KeyboardAvoidingView>
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