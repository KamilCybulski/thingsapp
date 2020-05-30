import produce from 'immer';
import { createReducer } from '../common';
import { TYPES as ITEMS_TYPES } from '../items';

export const TYPES = {
  setOwn: 'storages/SET_OWN',
};

const INITIAL_STATE = {
  loadedItems: [],
  own: {},
  accessible: {},
};

export const setOwnStorages = storages => ({
  type: TYPES.setOwn,
  payload: storages,
});

export const storagesReducer = createReducer(INITIAL_STATE, {
  [TYPES.setOwn]: (state, action) => ({
    ...state,
    own: action.payload,
  }),
  [ITEMS_TYPES.add]: (state, action) =>
    produce(state, draft => {
      const { items } = action.payload;
      const { storageId } = action.meta;
      const { own, accessible } = draft;
      const itemsIds = Object.keys(items);

      const storage = own[storageId] || accessible[storageId];
      if (!storage) {
        return;
      }

      if (storage.items) {
        storage.items = [...new Set(storage.items.concat(itemsIds))];
      } else {
        storage.items = itemsIds;
      }

      draft.loadedItems.push(storageId);
    }),
});
