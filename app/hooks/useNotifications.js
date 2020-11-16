import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';

import expoPushTokensApi from '../api/expoPushTokens';
import navigation from '../navigation/rootNavigation';
import routes from '../navigation/routes';


export default useNotifications = () => {
    useEffect(() => {
        registerForPushNotifications();

        Notifications.addNotificationResponseReceivedListener(notification =>
            navigation.navigate(routes.ACCOUNT)); //real app, inspect data prop of notification object -> send to various screens + additional parameters
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync(); //identifies user device
            console.log(token);
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Error getting a push notification", error);
        }
    }

}

