import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonWrapper = styled.View`
  position: absolute;
  width: 50px;
  height: 50px;
  elevation: 8;
  overflow: hidden;
  border-radius: 50px;
  bottom: 20px;
`;

const RoundButton = styled.TouchableOpacity`
  /* overflow: hidden; */
  height: 100%;
  width: 100%;
`;

const styles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
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
