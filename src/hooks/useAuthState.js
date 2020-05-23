import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logUserIn, logUserOut } from '../store/user';
import { getUserDetails } from '../helpers';

const useAuthState = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();

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

  return { authInitialized: isInitialized };
};

export default useAuthState;
