import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { SCREENS } from '.';
import { IconButton } from '../components';
import AddIcon from '../assets/icons/add--white.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { storageService } from '../services';

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
  const [ownStorages, setOwnStorages] = useState([]);

  const handlePress = useCallback(() => {
    navigation.navigate(SCREENS.addThing);
  }, [navigation]);

  useEffect(() => {
    storageService.getOwnStorages().then(setOwnStorages);
  }, []);

  return (
    <HomeScreenContanier>
      <HomeScreenText>Welcome to HomeScreen</HomeScreenText>
      <FlatList
        data={ownStorages}
        renderItem={({ item }) => <Item key={item.id}>- {item.name}</Item>}
      />
      <IconButton onPress={handlePress}>
        <AddIcon width={30} height={30} fill="#fff" />
      </IconButton>
    </HomeScreenContanier>
  );
};

export default HomeScreen;
