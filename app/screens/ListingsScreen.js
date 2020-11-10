import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'; 

import AppText from '../components/Text'; 
import Button from '../components/Button'; 
import Card from '../components/Card';
import colors from '../config/colors';
import listingsAPI from '../api/listings'; 
import routes from '../navigation/routes'; 
import Screen from '../components/Screen';


const ListingsScreen = ({ navigation }) => {
   const [listings, setListings] = useState([]); //create state variable to store data from server
   const [error, setError] = useState(false); 
   const [loading, setLoading ] = useState(false); 


   useEffect(() => {
       loadListings();
   }, []); //call api once 1st time component rendered 

   const loadListings = async () => {
       setLoading(true); 
       const response = await listingsAPI.getListings(); 
       setLoading(false); 

       if(!response.ok) return setError(true);
       
       setError(false);
       setListings(response.data); 
   }

    return ( 
        <Screen style={styles.screen}> 
        { error && 
            <>
            <AppText> Couldn't retrieve the listings. </AppText>
            <Button title="Retry" onPress={loadListings} />
            </>
        }
        <ActivityIndicator animating={true} size={30}/>
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