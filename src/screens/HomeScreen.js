import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SCREENS } from '.';
import PlusIcon from '../icons/plus.svg';
import { TouchableHighlight } from 'react-native-gesture-handler';

const HomeScreenContanier = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #006b3c;
`;

const AddProductButtonContent = styled.View`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  padding: 0 10px;
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
      <TouchableHighlight onPress={handlePress}>
        <AddProductButtonContent onPress={handlePress}>
          <PlusIcon width={20} height={20} fill="#fff" />
          <HomeScreenText>Add new product</HomeScreenText>
        </AddProductButtonContent>
      </TouchableHighlight>
    </HomeScreenContanier>
  );
};
