import React from 'react';
import styled from 'styled-components/native';
import { AppTitle } from '../components';

const SplashScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
`;

const SplashScreen = () => (
  <SplashScreenWrapper>
    <AppTitle />
  </SplashScreenWrapper>
);

export default SplashScreen;
