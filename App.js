import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';

import { Text, Button } from './src/components';
import { View } from 'react-native';

import AppScreens, { SCREENS } from './src/screens';
import { getUserDetails } from './src/helpers';
import {
  logUserIn,
  logUserOut,
  isUserLoggedInSelector,
} from './src/store/user';
import SplashScreen from './src/screens/SplashScreen';
import { removeNotification } from './src/store/notifications';

const App = () => {
  const dispatch = useDispatch();
  const { userLoggedIn, notifications } = useSelector(state => ({
    userLoggedIn: isUserLoggedInSelector(state),
    notifications: state.notifications,
  }));
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(logUserIn(getUserDetails(user)));
      } else {
        dispatch(logUserOut());
      }

      if (!isInitialized) {
        setIsInitialized(true);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isInitialized) {
    return <SplashScreen />;
  }

  return (
    <>
      {notifications &&
        notifications.map((notification, i) => (
          <View key={i}>
            <Text>{notification.type}:</Text>
            <Text>{notification.message}</Text>
            <Button
              onPress={() => dispatch(removeNotification(notification.id))}
            >
              Delete
            </Button>
          </View>
        ))}
      <NavigationContainer>
        <AppScreens
          initialRouteName={userLoggedIn ? SCREENS.home : SCREENS.auth}
        />
      </NavigationContainer>
    </>
  );
};

export default App;
