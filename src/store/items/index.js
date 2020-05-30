import produce from 'immer';
import { createReducer } from '../common';

export const TYPES = {
  add: 'items/ADD',
};

const INITIAL_STATE = {
  data: {},
};

export const addItems = (items, storageId) => ({
  type: TYPES.add,
  payload: { items },
  meta: { storageId },
});

export const itemsReducer = createReducer(INITIAL_STATE, {
  [TYPES.add]: (state, { payload }) =>
    produce(state, draft => {
      draft.data = {
        ...draft.data,
        ...payload.items,
      };
    }),
});
