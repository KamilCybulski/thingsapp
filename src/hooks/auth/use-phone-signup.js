import { useRef, useCallback } from 'react';
import auth from '@react-native-firebase/auth';

export const usePhoneSignup = () => {
  const authRef = useRef(null);

  const sendSmsCode = useCallback(async phoneNumber => {
    const result = await auth().signInWithPhoneNumber(phoneNumber);
    authRef.current = result;
  }, []);

  const confirmSmsCode = useCallback(
    async code => {
      if (!authRef.current) {
        throw new Error(
          'Error: attempted sms code confirmation with out sending sms code',
        );
      } else {
        authRef.current.confirm(code);
      }
    },
    [authRef],
  );

  return { sendSmsCode, confirmSmsCode };
};
