import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Login from './screens/Login';
import Register from './screens/Register';
import Collections from './screens/Collections';
import NewCollection from './screens/NewCollection';
import UpdateCollection from './screens/UpdateCollection';


// import { StackNavigation } from './navigation/StackNavigation';

import 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Collections" component={Collections} />
      <Stack.Screen name="NewCollection" component={NewCollection} />
      <Stack.Screen name="UpdateCollection" component={UpdateCollection} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );   
}

