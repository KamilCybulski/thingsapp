import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import store from './src/store';
import { name as appName } from './app.json';

const Base = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Base);
