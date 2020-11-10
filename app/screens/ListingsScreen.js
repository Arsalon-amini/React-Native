import React, { useEffect, useState } from 'react'; 
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsAPI from '../api/listings'; 
import routes from '../navigation/routes'; 
import Screen from '../components/Screen';


const ListingsScreen = ({ navigation }) => {
   const [listings, setListings] = useState([]); //create state variable to store data from server

   useEffect(() => {
       loadListings();
   }, []); //call api once 1st time component rendered 

   const loadListings = async () => {
       const { data } = await listingsAPI.getListings(); 
       setListings(data); 
   }

    return ( 
        <Screen style={styles.screen}> 
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
                <Card 
                    title={item.title}
                    subTitle={"$" + item.price}
                    imageUrl={item.images[0].url}
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
        backgroundColor: colors.light
    }
})
 
export default ListingsScreen;