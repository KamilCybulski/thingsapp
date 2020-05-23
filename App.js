import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';

import AppScreens, { SCREENS } from './src/screens';
import { getUserDetails } from './src/helpers';
import {
  logUserIn,
  logUserOut,
  isUserLoggedInSelector,
} from './src/store/user';
import SplashScreen from './src/screens/SplashScreen';

import { NotificationsController } from './src/components';

const AppWrapper = styled.View`
  flex: 1;
`;

const App = () => {
  const dispatch = useDispatch();
  const { userLoggedIn } = useSelector(state => ({
    userLoggedIn: isUserLoggedInSelector(state),
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
    <AppWrapper>
      <NavigationContainer>
        <AppScreens
          initialRouteName={userLoggedIn ? SCREENS.home : SCREENS.auth}
        />
      </NavigationContainer>
      <NotificationsController />
    </AppWrapper>
  );
};

export default App;
