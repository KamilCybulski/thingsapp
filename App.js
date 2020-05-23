import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import '@react-native-firebase/app';

import AppScreens from './src/screens';
import SplashScreen from './src/screens/SplashScreen';
import useAuthState from './src/hooks/useAuthState';

const App = () => {
  const { authInitialized } = useAuthState();

  if (!authInitialized) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

export default App;
