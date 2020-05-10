import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

const StyledInput = styled.TextInput`
  height: 50px;
  background: #fff;
  width: 100%;
  border-radius: 50px;
  elevation: 2;
  padding: 0 25px;
`;

const Input = ({ value, placeholder, onChange }) => (
  <StyledInput
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
  />
);

export default Input;
