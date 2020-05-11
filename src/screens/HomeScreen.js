import React, { useCallback } from 'react';
import styled from 'styled-components/native';

import { SCREENS } from '.';
import { IconButton } from '../components';
import AddIcon from '../assets/icons/add--white.svg';

const HomeScreenContanier = styled.View`
  align-items: center;
  background-color: #e1e6ea;
  flex: 1;
  justify-content: center;
`;

const HomeScreenText = styled.Text`
  color: #fff;
`;

const HomeScreen = ({ navigation }) => {
  const handlePress = useCallback(() => {
    navigation.navigate(SCREENS.addThing);
  }, [navigation]);

  return (
    <HomeScreenContanier>
      <HomeScreenText>Welcome to HomeScreen</HomeScreenText>
      <IconButton onPress={handlePress}>
        <AddIcon width={30} height={30} fill="#fff" />
      </IconButton>
    </HomeScreenContanier>
  );
};

export default HomeScreen;
