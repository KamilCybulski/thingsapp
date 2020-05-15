import React from 'react';
import styled from 'styled-components/native';

import Gradient from '../Gradient';

const StyledButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 50px;
  elevation: 3;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const StyledText = styled.Text`
  color: #fff;
  font-family: 'JosefinSans-Regular';
`;

const Button = ({ children, onPress }) => (
  <StyledButton onPress={onPress}>
    <Gradient>
      <StyledText>{children}</StyledText>
    </Gradient>
  </StyledButton>
);

export default Button;
