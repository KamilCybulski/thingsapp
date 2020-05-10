import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  background: #fff;
  border-radius: 50px;
  elevation: 2;
  font-family: 'JosefinSans-Regular';
  height: 50px;
  padding: 0 25px;
  width: 100%;
`;

const Input = ({ value, placeholder, onChangeText, ...rest }) => (
  <StyledInput
    value={value}
    placeholder={placeholder}
    onChangeText={text => onChangeText(text)}
    {...rest}
  />
);

export default Input;
