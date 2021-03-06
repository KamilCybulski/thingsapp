import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Input, Button, Wrapper, AppTitle } from '..';

const AuthConfirmationFormWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
`;

const AuthConfirmationForm = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  return (
    <AuthConfirmationFormWrapper>
      <AppTitle />
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
        <Button onPress={() => onSubmit({ code })}>Confirm</Button>
      </Wrapper>
    </AuthConfirmationFormWrapper>
  );
};

export default AuthConfirmationForm;
