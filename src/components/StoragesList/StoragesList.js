import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import { useOwnStorages } from '../../hooks';

const Item = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
`;

const StoragesList = () => {
  const { ownStorages, isLoading } = useOwnStorages();

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
      renderItem={({ item }) => <Item key={item.id}>- {item.name}</Item>}
    />
  );
};

export default StoragesList;
