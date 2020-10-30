import React from 'react';
import { FlatList, StyleSheet} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'; 

const messages = 
[
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/headshot.jpg') //in real APP, will call API to get messages (dummy data)
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/headshot.jpg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={messages}
            keyExtractor={ message => message.id.toString() } //fn that extracts a unique identifier from each item in our input data
            renderItem={({ item })=> //fn that renders each item
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message clicked', item)}
             />}
             ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;


