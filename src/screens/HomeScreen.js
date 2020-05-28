import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { SCREENS } from '.';
import { IconButton } from '../components';
import AddIcon from '../assets/icons/add--white.svg';
import { useOwnStorages } from '../hooks';

const HomeScreenContanier = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const HomeScreenText = styled.Text`
  color: #fff;
`;

const Item = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
`;

const HomeScreen = ({ navigation }) => {
  const { ownStorages } = useOwnStorages();

  const handlePress = useCallback(() => {
    navigation.navigate(SCREENS.addThing);
  }, [navigation]);

  return (
    <HomeScreenContanier>
      <HomeScreenText>Welcome to HomeScreen</HomeScreenText>
      {ownStorages?.length > 0 && (
        <FlatList
          data={ownStorages}
          renderItem={({ item }) => <Item key={item.id}>- {item.name}</Item>}
        />
      )}
      <IconButton onPress={handlePress}>
        <AddIcon width={30} height={30} fill="#fff" />
      </IconButton>
    </HomeScreenContanier>
  );
};

export default HomeScreen;
