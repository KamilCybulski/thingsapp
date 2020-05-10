import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';

import { AppScreens } from './src/screens';
import { logUserIn, logUserOut } from './src/store/user';
import { getUserDetails } from './src/helpers';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(logUserIn(getUserDetails(user)));
      } else {
        dispatch(logUserOut());
      }
    });

    return unsubscribe;
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

export default App;
