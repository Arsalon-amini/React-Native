import React, { useState } from 'react'; 
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Colors from '../config/colors';
import routes from '../navigation/routes'; 
import Screen from '../components/Screen';

const listings = [
    {
        id: 1,
        title: "red jacket for sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Couch for sale",
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]

const ListingsScreen = ({ navigation }) => {
    return ( 
        <Screen style={styles.screen}> 
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
                <Card 
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                    onPress={
                        ()=> navigation.navigate(routes.LISTING_DETAILS, item) 
                    }
                />}
            />
        </Screen>
     );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: Colors.light
    }
})
 
export default ListingsScreen;