import produce from 'immer';
import { createReducer } from '../common';
import { TYPES as ITEMS_TYPES } from '../items';

export const TYPES = {
  set: 'storages/SET',
};

const INITIAL_STATE = {
  loadedItems: [],
  data: {},
};

export const setStorages = storages => ({
  type: TYPES.set,
  payload: storages,
});

export const storagesReducer = createReducer(INITIAL_STATE, {
  [TYPES.set]: (state, action) =>
    produce(state, draft => {
      draft.data = action.payload;
    }),
  [ITEMS_TYPES.add]: (state, action) =>
    produce(state, draft => {
      const { items } = action.payload;
      const { storageId } = action.meta;
      const itemsIds = Object.keys(items);

      const storage = draft.data[storageId];
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
