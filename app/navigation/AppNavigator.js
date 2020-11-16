import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import AccountNavigator from './AccountNavigator';
import expoPushTokensApi from '../api/expoPushTokens';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from '../navigation/routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    useEffect(() => {
        registerForPushNotifications();
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Error getting a push notification", error);
        }
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name={routes.HOME} color={color} size={size} />
                }}
            />
            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={({ navigation, route }) => ({
                    tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                })}
            />
            <Tab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name={routes.ACCOUNT} color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator; 
