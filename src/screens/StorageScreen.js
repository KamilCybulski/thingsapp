import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import AddIcon from '../assets/icons/add--white.svg';
import { useStorageItems } from '../hooks';
import { IconButton } from '../components';
import { useCallback } from 'react';
import { SCREENS } from '.';

const StorageScreenContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const StorageScreenHeader = styled.Text`
  color: #000;
`;

const StorageScreen = ({ route, navigation }) => {
  const { storageId } = route.params;
  // const storage = useSelector(state => state.storages.own.data[storageId]);
  // const { items } = useStorageItems(storageId);

  const handleAddItemPress = useCallback(() => {
    navigation.navigate(SCREENS.newItem);
  }, [navigation]);

  return (
    <StorageScreenContainer>
      <StorageScreenHeader>This is my storage</StorageScreenHeader>
      <IconButton onPress={handleAddItemPress}>
        <AddIcon width={30} height={30} fill="#fff" />
      </IconButton>
    </StorageScreenContainer>
  );
};

export default StorageScreen;
