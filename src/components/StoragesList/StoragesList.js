import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS } from '../../screens';
import { useOwnStorages } from '../../hooks';

const ItemText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
`;

const ItemContainer = styled.TouchableWithoutFeedback`
  width: 200px;
  height: 50px;
`;

const Item = ({ onPress, children }) => (
  <ItemContainer onPress={onPress}>
    <ItemText>{children}</ItemText>
  </ItemContainer>
);

const StoragesList = () => {
  const navigation = useNavigation();
  const { ownStorages, isLoading } = useOwnStorages();

  const handleItemPress = useCallback(
    storageId => () => {
      navigation.navigate(SCREENS.storage, { storageId });
    },
    [navigation],
  );

  if (isLoading) {
    return null;
  }

  if (ownStorages?.length <= 0) {
    return (
      <Text>Hey, looks like you don't have any storages yet. Add one!</Text>
    );
  }

  return (
    <FlatList
      data={ownStorages}
      renderItem={({ item }) => (
        <Item key={item.id} onPress={handleItemPress(item.id)}>
          - {item.name}
        </Item>
      )}
    />
  );
};

export default StoragesList;
