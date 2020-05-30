import { combineReducers, createStore } from 'redux';

import { userReducer as user } from './user';
import { notificationsReducer as notifications } from './notifications';
import { storagesReducer as storages } from './storages';
import { itemsReducer as items } from './items';

const rootReducer = combineReducers({ user, notifications, storages, items });

export default createStore(rootReducer);
