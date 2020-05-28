import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import AddThingScreen from './AddThingScreen';
import StorageScreen from './StorageScreen';
import { useSelector } from 'react-redux';
import { isUserLoggedInSelector } from '../store/user';

const Stack = createStackNavigator();

export const SCREENS = {
  auth: 'Auth',
  home: 'Home',
  storage: 'Storage',
  addThing: 'AddThing',
};

const AppScreens = () => {
  const userLoggedIn = useSelector(isUserLoggedInSelector);

  return (
    <Stack.Navigator>
      {userLoggedIn ? (
        <>
          <Stack.Screen name={SCREENS.home} component={HomeScreen} />
          <Stack.Screen name={SCREENS.addThing} component={AddThingScreen} />
          <Stack.Screen name={SCREENS.storage} component={StorageScreen} />
        </>
      ) : (
        <Stack.Screen
          name={SCREENS.auth}
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppScreens;
