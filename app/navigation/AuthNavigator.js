import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen'; 
import WelcomeScreen from '../screens/WelcomeScreen'; 
import colors from '../config/colors';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Login" 
         component={LoginScreen} 
         options={ {
             headerStyle: { backgroundColor: colors.white }
         }}
         />
        <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={ {
            headerStyle: { backgroundColor: colors.white }
        }}
        />
    </Stack.Navigator>
)

export default AuthNavigator; 