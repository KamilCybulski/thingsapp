import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import Gradient from '../components/Gradient';
import Logo from '../assets/icons/things-logo.svg';
import Input from '../components/Input';

const ScreenWrapper = styled.View`
  flex: 1;
  padding: 0 10%;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.Text`
  font-family: 'Pacifico-Regular';
  color: #36415a;
  font-size: 32px;
`;

export const RegisterScreen = () => {
  const [phoneNumber, updatePhoneNumber] = useState('');

  return (
    <ScreenWrapper>
      <Heading>Things</Heading>
      <Input
        value={phoneNumber}
        onChange={updatePhoneNumber}
        placeholder="Your phone number"
      />
    </ScreenWrapper>
  );
};
