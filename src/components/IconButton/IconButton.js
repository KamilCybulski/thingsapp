import React from 'react';
import styled from 'styled-components/native';

import Gradient from '../Gradient';

// FIXME should not have position:absolute and positioning styles
// This should be possible to set from the parent
const ButtonWrapper = styled.View`
  border-radius: 50px;
  bottom: 20px;
  elevation: 8;
  height: 50px;
  overflow: hidden;
  position: absolute;
  width: 50px;
`;

const RoundButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

const IconButton = ({ children, onPress }) => (
  <ButtonWrapper>
    <RoundButton onPress={onPress}>
      <Gradient>{children}</Gradient>
    </RoundButton>
  </ButtonWrapper>
);

export default IconButton;
