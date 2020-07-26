import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import AddIcon from '../assets/icons/add--white.svg';
import { IconButton, ItemsList } from '../components';
import { useCallback } from 'react';
import { SCREENS } from '.';

const StorageScreenContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: #00563f;
`;

const StorageScreenHeader = styled.Text`
  color: #fff;
`;

const StorageScreen = ({ route, navigation }) => {
  const { storageId } = route.params;
  const storage = useSelector(state => state.storages.data[storageId]);

  const handleAddItemPress = useCallback(() => {
    navigation.navigate(SCREENS.newItem, { storageId });
  }, [navigation, storageId]);

  return (
    <StorageScreenContainer>
      <StorageScreenHeader>{storage.name}</StorageScreenHeader>
      <ItemsList storageId={storageId} />
      <IconButton onPress={handleAddItemPress}>
        <AddIcon width={30} height={30} fill="#fff" />
      </IconButton>
    </StorageScreenContainer>
  );
};

export default StorageScreen;
