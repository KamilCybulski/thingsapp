import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import { SCREENS } from '.';

const HomeScreenContanier = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #006b3c;
`;

const HomeScreenText = styled.Text`
  color: #fff;
`;

export const HomeScreen = ({ navigation }) => {
  const handlePress = useCallback(() => {
    navigation.navigate(SCREENS.addThing);
  }, [navigation]);

  return (
    <HomeScreenContanier>
      <HomeScreenText>Welcome to HomeScreen</HomeScreenText>
      <Button title="Add new product" onPress={handlePress} />
    </HomeScreenContanier>
  );
};
