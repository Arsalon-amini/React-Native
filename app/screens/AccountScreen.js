import React, { useContext } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon'; 
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import AuthContext from '../auth/context';

//won't be re-rendered every time component is rendered
const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {    
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext); 

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title={user.name}
                subTitle={user.email}
                image={require('../assets/headshot.jpg')}
            />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem 
                        title={item.title} 
                        IconComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                        }
                        onPress={() => navigation.navigate(item.targetScreen)}
                        /> }
                    
                />
            </View>
            <ListItem 
                title="Log out"
                ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={() => setUser(null)}
            />
            </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;