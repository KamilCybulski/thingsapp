import { combineReducers, createStore } from 'redux';

import { userReducer as user } from './user';
import { notificationsReducer as notifications } from './notifications';
import { storagesReducer as storages } from './storages';

const rootReducer = combineReducers({ user, notifications, storages });

export default createStore(rootReducer);
