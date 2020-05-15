import { useRef, useCallback } from 'react';
import auth from '@react-native-firebase/auth';

const usePhoneAuth = () => {
  const authRef = useRef(null);

  const sendSmsCode = useCallback(
    async phoneNumber => {
      if (!phoneNumber) {
        throw new Error('Field reqired');
      }
      const result = await auth().signInWithPhoneNumber(phoneNumber);
      authRef.current = result;
    },
    [authRef],
  );

  const confirmSmsCode = useCallback(
    async code => {
      if (!authRef.current) {
        throw new Error(
          'Error: attempted sms code confirmation with out sending sms code',
        );
      } else {
        await authRef.current.confirm(code);
      }
    },
    [authRef],
  );

  return { sendSmsCode, confirmSmsCode };
};

export default usePhoneAuth;
