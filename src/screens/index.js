import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { AddThingScreen } from './AddThingScreen';

const Stack = createStackNavigator();

export const SCREENS = {
  home: 'Home',
  addThing: 'AddThing',
};

export const AppScreens = () => (
  <Stack.Navigator initialRouteName={SCREENS.home}>
    <Stack.Screen name={SCREENS.home} component={HomeScreen} />
    <Stack.Screen name={SCREENS.addThing} component={AddThingScreen} />
  </Stack.Navigator>
);
