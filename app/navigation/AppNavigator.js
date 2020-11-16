import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import navigation from '../navigation/rootNavigation';
import NewListingButton from './NewListingButton';
import routes from '../navigation/routes';
import useNotifications from '../hooks/useNotifications';



const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useNotifications();

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
