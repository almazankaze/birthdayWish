export const initialState = {
  user: null,
  birthdays: [],
  loading: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOADING: "LOADING",
  DISPLAY_POSTS: "DISPLAY_POSTS",
  DISPLAY_BIRTHDAYS: "DISPLAY_BIRTHDAYS",
  ADD_BIRTHDAY: "ADD_BIRTHDAY",
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
        loading: !state.loading,
      };
    case actionTypes.DISPLAY_POSTS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.DISPLAY_BIRTHDAYS:
      return {
        ...state,
        birthdays: action.payload,
        loading: false,
      };
    case actionTypes.ADD_BIRTHDAY:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
