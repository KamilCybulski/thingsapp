import React from 'react';
import styled from 'styled-components/native';

const SplashScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
`;

const SplashScreenHeading = styled.Text`
  color: #36415a;
  font-family: 'Pacifico-Regular';
  font-size: 32px;
`;

const SplashScreen = () => (
  <SplashScreenWrapper>
    <SplashScreenHeading>Things</SplashScreenHeading>
  </SplashScreenWrapper>
);

export default SplashScreen;
