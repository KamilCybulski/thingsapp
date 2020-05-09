import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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

const styles = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
};

const IconButton = ({ children, onPress }) => (
  <ButtonWrapper>
    <RoundButton onPress={onPress}>
      <LinearGradient
        colors={['#6BB4D0', '#37ECBA']}
        style={styles}
        locations={[0.2, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 1 }}
      >
        {children}
      </LinearGradient>
    </RoundButton>
  </ButtonWrapper>
);

export default IconButton;
