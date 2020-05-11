import React from 'react';
import styled from 'styled-components/native';

const InputWrapper = styled.View``;

const ErrorText = styled.Text`
  color: #f00;
`;

const StyledInput = styled.TextInput`
  background: #fff;
  border-radius: 50px;
  elevation: 2;
  font-family: 'JosefinSans-Regular';
  height: 50px;
  padding: 0 25px;
  width: 100%;
`;

const Input = ({ value, placeholder, onChangeText, error, ...rest }) => (
  <InputWrapper>
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChangeText={text => onChangeText(text)}
      {...rest}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </InputWrapper>
);

export default Input;
