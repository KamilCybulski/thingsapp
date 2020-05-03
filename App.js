import React, { Component } from 'react';
import styled from 'styled-components';

import firebase from '@react-native-firebase/app';

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: red;
  margin: 10px;
`;

export default class App extends Component {
  render() {
    return (
      <MainContainer>
        <WelcomeText>Welcome to React Native + Firebase!</WelcomeText>
      </MainContainer>
    );
  }
}
