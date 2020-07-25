import React from 'react';
import styled from 'styled-components/native';
import NewItemForm from '../components/NewItemForm';

const NewItemScreenContanier = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00563f;
`;

const NewItemScreen = ({ navigation, route }) => (
  <NewItemScreenContanier>
    <NewItemForm storageId={route.params.storageId} />
  </NewItemScreenContanier>
);

export default NewItemScreen;
