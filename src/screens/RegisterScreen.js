import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Input, Button, Text, Wrapper } from '../components';

const RegisterScreenWrapper = styled.View`
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

export const RegisterScreen = () => {
  const [phoneNumber, updatePhoneNumber] = useState('');

  return (
    <RegisterScreenWrapper>
      <Heading>Things</Heading>
      <Wrapper mt="50px" mb="20px">
        <Input
          value={phoneNumber}
          onChangeText={updatePhoneNumber}
          placeholder="Your phone number"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          returnKeyType="send"
          textContentType="telephoneNumber"
        />
      </Wrapper>
      <Wrapper mb="10px">
        <Button>Sign up</Button>
      </Wrapper>
      {/* TODO: add link */}
      <Text light>Already have an account? Sign in.</Text>
    </RegisterScreenWrapper>
  );
};
