import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RegisterScreen } from './RegisterScreen';
import { HomeScreen } from './HomeScreen';
import { AddThingScreen } from './AddThingScreen';

const Stack = createStackNavigator();

export const SCREENS = {
  register: 'Register',
  home: 'Home',
  addThing: 'AddThing',
};

export const AppScreens = () => (
  <Stack.Navigator initialRouteName={SCREENS.register}>
    <Stack.Screen
      name={SCREENS.register}
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={SCREENS.home} component={HomeScreen} />
    <Stack.Screen name={SCREENS.addThing} component={AddThingScreen} />
  </Stack.Navigator>
);
