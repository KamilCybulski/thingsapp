import React from 'react';
import styled from 'styled-components/native';

const NewItemScreenContanier = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00563f;
`;

const NewItemScreenText = styled.Text`
  color: #fff;
`;

const NewItemScreen = ({ navigation }) => (
  <NewItemScreenContanier>
    <NewItemScreenText>Welcome to NewItemScreen</NewItemScreenText>
  </NewItemScreenContanier>
);

export default NewItemScreen;
