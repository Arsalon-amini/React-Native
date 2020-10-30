import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';

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
       <FlatList 
       data={messages}
       keyExtractor={ message => message.id.toString() } //fn that extracts a unique identifier from each item in our input data
       renderItem={({ item })=> //fn that renders each item
       <ListItem
       title={item.title}
       subTitle={item.description}
       image={item.image}
        />}
       />
    );
}

export default MessagesScreen;


