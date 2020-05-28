export const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;

  return reducer;
};
