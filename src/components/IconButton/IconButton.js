import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const RoundButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
`;

const styles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const IconButton = ({ children, onPress }) => (
  <RoundButton onPress={onPress}>
    <LinearGradient
      colors={['#36739D', '#189D91', '#0BC57D']}
      style={styles}
      locations={[0.2, 0.6, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
    >
      {children}
    </LinearGradient>
  </RoundButton>
);

export default IconButton;
