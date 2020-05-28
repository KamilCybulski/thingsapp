import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const StorageScreenContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const StorageScreenHeader = styled.Text`
  color: #000;
`;

const StorageScreen = ({ route }) => {
  const { storageId } = route.params;
  const storage = useSelector(state => state.storages.own[storageId]);

  console.log('PICKED STORAGE: ', storage);

  return (
    <StorageScreenContainer>
      <StorageScreenHeader>This is {storage.name} storage</StorageScreenHeader>
    </StorageScreenContainer>
  );
};

export default StorageScreen;
