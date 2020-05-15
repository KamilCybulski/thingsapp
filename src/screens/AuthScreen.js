import React, { useState } from 'react';

import { usePhoneAuth } from '../hooks';
import { useCallback } from 'react';
import { SCREENS } from '.';
import { AuthConfirmationForm, PhoneNumberForm } from '../components';

const AuthScreen = ({ navigation }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState(null);
  const { sendSmsCode, confirmSmsCode } = usePhoneAuth();

  const handleConfirmationFormSubmit = useCallback(
    async values => {
      setError(null);

      const { code } = values;
      try {
        await confirmSmsCode(code);
        navigation.navigate(SCREENS.home);
      } catch (err) {
        if (err.message.includes('invalid-verification-code')) {
          setError('Invalid verification code');
        } else {
          setError(err.message);
        }
      }
    },
    [navigation, confirmSmsCode],
  );

  const handlePhoneFormsubmit = useCallback(
    async values => {
      setError(null);

      const { phoneNumber } = values;
      try {
        await sendSmsCode(phoneNumber);
        setShowConfirmation(true);
      } catch (err) {
        if (err.message.includes('invalid-phone-number')) {
          setError('Invalid phone number');
        } else {
          setError(err.message);
        }
      }
    },
    [sendSmsCode, setError, setShowConfirmation],
  );

  return showConfirmation ? (
    <AuthConfirmationForm
      onSubmit={handleConfirmationFormSubmit}
      error={error}
    />
  ) : (
    <PhoneNumberForm onSubmit={handlePhoneFormsubmit} error={error} />
  );
};

export default AuthScreen;
