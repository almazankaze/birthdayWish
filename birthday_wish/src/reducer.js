export const initialState = {
  user: null,
  birthdays: [],
  loading: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOADING: "LOADING",
  DISPLAY_BIRTHDAYS: "DISPLAY_BIRTHDAYS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DISPLAY_BIRTHDAYS:
      return {
        ...state,
        birthdays: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
