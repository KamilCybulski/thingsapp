import React from 'react';
import styled from 'styled-components/native';

import { StoragesList } from '../components/';

const HomeScreenContanier = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const HomeScreenText = styled.Text`
  color: #fff;
`;

const HomeScreen = ({ navigation }) => (
  <HomeScreenContanier>
    <HomeScreenText>Welcome to HomeScreen</HomeScreenText>
    <StoragesList />
  </HomeScreenContanier>
);

export default HomeScreen;
