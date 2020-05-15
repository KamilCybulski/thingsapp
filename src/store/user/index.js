const initialState = {
  isLoggedIn: false,
  details: null,
};

export * from './selectors';

export const logUserIn = userDetails => ({
  type: 'LOG_IN',
  payload: userDetails,
});

export const logUserOut = () => ({
  type: 'LOG_OUT',
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        details: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        details: null,
      };
    default:
      return state;
  }
};
