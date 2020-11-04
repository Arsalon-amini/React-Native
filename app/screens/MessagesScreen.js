import React, { useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'; 

const initialMessages = [
    {
      id: 1,
      title: "Arsalon A",
      description: "Hey! Is this item still available",
      image: require("../assets/headshot.jpg"),
    },
    {
      id: 2,
      title: "Arsalon A",
      description: "I'm interested in this item! How much does it cost? ",
      image: require("../assets/headshot.jpg"),
    },
  ];

function MessagesScreen(props) {
    const [messages, setMessages ] = useState(initialMessages); //give initial state, pick messages(variable) and setMessages(fn updating messages) from array returned 
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id );
        setMessages(newMessages); 
    }

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
            renderRightActions={() => 
            <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />}
             ItemSeparatorComponent={ListItemSeparator} //second prop to FlatList component
             refreshing={refreshing} //bind prop to our state variable
             onRefresh={() => setMessages([
                {
                    id: 2,
                    title: "Title #2",
                    description: "Return policy question",
                    image: require("../assets/headshot.jpg"),
                  },
                  {
                    id: 1,
                    title: "Title #1",
                    description: "Item Inquiry",
                    image: require("../assets/headshot.jpg"),
                  },
             ])}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;


