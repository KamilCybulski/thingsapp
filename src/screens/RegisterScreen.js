import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import Gradient from '../components/Gradient';
import Logo from '../assets/icons/things-logo.svg';

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

export const RegisterScreen = () => (
  <ScreenWrapper>
    <Heading>Things</Heading>
  </ScreenWrapper>
);
