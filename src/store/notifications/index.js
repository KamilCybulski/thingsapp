import { getUniqueId } from '../../helpers/getUniqueId';

const initialState = [];

export const addNotification = notification => ({
  type: 'ADD_NOTIFICATION',
  payload: notification,
});

export const removeNotification = id => ({
  type: 'REMOVE_NOTIFICATION',
  payload: id,
});

export const addErrorNotification = message =>
  addNotification({ type: 'Error', message });

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, { ...action.payload, id: getUniqueId() }];
    case 'REMOVE_NOTIFICATION':
      return state.filter(notification => notification.id !== action.payload);
    default:
      return state;
  }
};
