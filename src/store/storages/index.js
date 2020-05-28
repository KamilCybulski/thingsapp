import { createReducer } from '../common';

const TYPES = {
  setOwn: 'storages/SET_OWN',
};

const INITIAL_STATE = {
  own: [],
  accessible: [],
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
});
