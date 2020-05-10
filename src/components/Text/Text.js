import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: ${({ light }) => (light ? '#999' : '#36415a')};
  font-family: 'JosefinSans-Regular';

  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};
`;

const Text = ({ children, light, color, style }) => (
  <StyledText color={color} light={light} style={style}>
    {children}
  </StyledText>
);

export default Text;
