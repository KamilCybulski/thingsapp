import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { usePhoneAuth } from '../hooks';
import { SCREENS } from '.';
import { AuthConfirmationForm, PhoneNumberForm } from '../components';
import { addErrorNotification } from '../store/notifications';

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { sendSmsCode, confirmSmsCode } = usePhoneAuth();

  const handleConfirmationFormSubmit = useCallback(
    async values => {
      const { code } = values;
      try {
        await confirmSmsCode(code);
        navigation.navigate(SCREENS.home);
      } catch (err) {
        if (err.message.includes('invalid-verification-code')) {
          dispatch(addErrorNotification('Invalid verification code'));
        } else {
          dispatch(addErrorNotification(err.message));
        }
      }
    },
    [navigation, confirmSmsCode, dispatch],
  );

  const handlePhoneFormsubmit = useCallback(
    async values => {
      const { phoneNumber } = values;
      try {
        await sendSmsCode(phoneNumber);
        setShowConfirmation(true);
      } catch (err) {
        if (err.message.includes('invalid-phone-number')) {
          dispatch(addErrorNotification('Invalid phone number'));
        } else {
          dispatch(addErrorNotification(err.message));
        }
      }
    },
    [sendSmsCode, setShowConfirmation, dispatch],
  );

  return showConfirmation ? (
    <AuthConfirmationForm onSubmit={handleConfirmationFormSubmit} />
  ) : (
    <PhoneNumberForm onSubmit={handlePhoneFormsubmit} />
  );
};

export default AuthScreen;
