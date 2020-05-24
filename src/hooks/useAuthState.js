import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logUserIn, logUserOut } from '../store/user';
import { userService } from '../services';

const useAuthState = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async userRef => {
      if (userRef) {
        try {
          const user = await userService.getUser(userRef.uid);
          dispatch(logUserIn(user));
        } catch (err) {
          console.log(err);
          // noop
        }
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
