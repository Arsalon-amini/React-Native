import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import colors from '../config/colors';
import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen'; 
import routes from '../navigation/routes'; 
import WelcomeScreen from '../screens/WelcomeScreen'; 

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
        name={routes.WELCOME}
        component={WelcomeScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen
         name={routes.LOGIN}
         component={LoginScreen} 
         options={ {
             headerStyle: { backgroundColor: colors.white }
         }}
         />
        <Stack.Screen 
        name={routes.REGISTER}
        component={RegisterScreen} 
        options={ {
            headerStyle: { backgroundColor: colors.white }
        }}
        />
    </Stack.Navigator>
)

export default AuthNavigator; 