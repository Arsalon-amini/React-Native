import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';

import expoPushTokensApi from '../api/expoPushTokens';



export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        if(notificationListener) 
            Notifications.addNotificationResponseReceivedListener(notificationListener)}, []);

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

