import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login';
import Register from '../screens/Register';
import Collections from '../screens/Collections';

const Stack = createStackNavigator();

export default function StackNavigation(){
 return (
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Collections" component={Collections} />
      </Stack.Navigator>
    );
}    