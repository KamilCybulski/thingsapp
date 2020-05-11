import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Input, Button, Wrapper } from '../components';
import { usePhoneAuth } from '../hooks';
import { useCallback } from 'react';
import { SCREENS } from '.';

const AuthScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
`;

const Heading = styled.Text`
  color: #36415a;
  font-family: 'Pacifico-Regular';
  font-size: 32px;
`;

const PhoneNumberForm = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <Wrapper mt="50px" mb="20px">
        <Input
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Your phone number"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          returnKeyType="send"
          textContentType="telephoneNumber"
        />
      </Wrapper>
      <Wrapper mb="10px">
        <Button onPress={() => onSubmit(phoneNumber)}>Send</Button>
      </Wrapper>
    </>
  );
};

const ConfirmationCodeForm = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  return (
    <>
      <Wrapper mt="50px" mb="20px">
        <Input
          value={code}
          onChangeText={setCode}
          placeholder="Your confirmation code"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          returnKeyType="send"
          textContentType="telephoneNumber"
        />
      </Wrapper>
      <Wrapper mb="10px">
        <Button onPress={() => onSubmit(code)}>Confirm</Button>
      </Wrapper>
    </>
  );
};

const AuthScreen = ({ navigation }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { sendSmsCode, confirmSmsCode } = usePhoneAuth();

  const handleConfirmationCodeSubmit = useCallback(
    async code => {
      try {
        await confirmSmsCode(code);
        navigation.navigate(SCREENS.home);
      } catch (error) {
        console.error(error);
      }
    },
    [navigation, confirmSmsCode],
  );

  const handlePhoneSubmit = useCallback(
    async phoneNumber => {
      try {
        await sendSmsCode(phoneNumber);
        setShowConfirmation(true);
      } catch (error) {
        console.log(error);
      }
    },
    [sendSmsCode, setShowConfirmation],
  );

  return (
    <AuthScreenWrapper>
      <Heading>Things</Heading>
      {showConfirmation ? (
        <ConfirmationCodeForm onSubmit={handleConfirmationCodeSubmit} />
      ) : (
        <PhoneNumberForm onSubmit={handlePhoneSubmit} />
      )}
    </AuthScreenWrapper>
  );
};

export default AuthScreen;
