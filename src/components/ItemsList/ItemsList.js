import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';

import { useStorageItems } from '../../hooks';

const ItemText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
`;

const ItemContainer = styled.View`
  width: 200px;
  height: 50px;
`;

const Item = ({ children }) => (
  <ItemContainer>
    <ItemText>{children}</ItemText>
  </ItemContainer>
);

const StoragesList = ({ storageId }) => {
  const { isLoading, items } = useStorageItems(storageId);

  console.log({ isLoading, items });

  if (isLoading) {
    return null;
  }

  if (items?.length <= 0) {
    return <Text>This storage is empty</Text>;
  }

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Item key={item.id}>
          * {item.name}, quantity: {item.quantity}
        </Item>
      )}
    />
  );
};

export default StoragesList;
