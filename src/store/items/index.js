import produce from 'immer';
import { createReducer } from '../common';

export const TYPES = {
  add: 'items/ADD',
};

const INITIAL_STATE = {
  loadedStorages: [],
  data: {},
};

export const addItems = (items, storageId) => ({
  type: TYPES.add,
  payload: { items, storageId },
});

export const itemsReducer = createReducer(INITIAL_STATE, {
  [TYPES.add]: (state, { payload }) =>
    produce(state, draft => {
      draft.loadedStorages.push(payload.storageId);
      draft.data = {
        ...draft.data,
        ...payload.items,
      };
    }),
});
