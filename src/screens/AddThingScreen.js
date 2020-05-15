import React from 'react';
import styled from 'styled-components/native';

const AddThingScreenContanier = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00563f;
`;

const AddThingScreenText = styled.Text`
  color: #fff;
`;

const AddThingScreen = ({ navigation }) => (
  <AddThingScreenContanier>
    <AddThingScreenText>Welcome to AddThingScreen</AddThingScreenText>
  </AddThingScreenContanier>
);

export default AddThingScreen;
