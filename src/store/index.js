import { combineReducers, createStore } from 'redux';

import { userReducer as user } from './user';
import { notificationsReducer as notifications } from './notifications';

const rootReducer = combineReducers({ user, notifications });

export default createStore(rootReducer);
