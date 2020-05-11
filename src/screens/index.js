import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import AddThingScreen from './AddThingScreen';

const Stack = createStackNavigator();

export const SCREENS = {
  auth: 'Auth',
  home: 'Home',
  addThing: 'AddThing',
};

const AppScreens = ({ initialRouteName }) => (
  <Stack.Navigator initialRouteName={initialRouteName}>
    <Stack.Screen
      name={SCREENS.auth}
      component={AuthScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={SCREENS.home} component={HomeScreen} />
    <Stack.Screen name={SCREENS.addThing} component={AddThingScreen} />
  </Stack.Navigator>
);

export default AppScreens;
