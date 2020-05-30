import React from 'react';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import '@react-native-firebase/app';

import AppScreens from './src/screens';
import SplashScreen from './src/screens/SplashScreen';
import { useAuthState } from './src/hooks';

import { NotificationsController } from './src/components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AppWrapper = styled.View`
  flex: 1;
`;

const App = () => {
  const { authInitialized } = useAuthState();

  // const store = useSelector(i => i);
  // useEffect(() => {
  //   console.log(store);
  // }, [store]);

  if (!authInitialized) {
    return <SplashScreen />;
  }

  return (
    <AppWrapper>
      <NavigationContainer>
        <AppScreens />
      </NavigationContainer>
      <NotificationsController />
    </AppWrapper>
  );
};

export default App;
