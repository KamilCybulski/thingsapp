import React from 'react';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import '@react-native-firebase/app';

import AppScreens from './src/screens';
import SplashScreen from './src/screens/SplashScreen';
import { useAuthState } from './src/hooks';
import { NotificationsController } from './src/components';

const AppWrapper = styled.View`
  flex: 1;
`;

const App = () => {
  const { authInitialized } = useAuthState();

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
