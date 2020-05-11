import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Input, Button, Wrapper } from '..';

const PhoneNumberFormWrapper = styled.View`
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
    <PhoneNumberFormWrapper>
      <Heading>Things</Heading>
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
    </PhoneNumberFormWrapper>
  );
};

export default PhoneNumberForm;
