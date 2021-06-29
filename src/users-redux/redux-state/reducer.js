import { USERS_ACTION } from "./constants";

const usersInitialState = {
  isLoading: true,
  isError: false,
  error: null,
  users: [],
};

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case USERS_ACTION.fetchAction:
      return { ...state, isLoading: true };
    case USERS_ACTION.successAction:
      return { ...state, users: action.payload.data, isLoading: false };
    case USERS_ACTION.failureAction:
      return {
        ...state,
        error: action.payload.error,
        isError: false,
        isLoading: false,
      };
    case USERS_ACTION.resetAction:
      return usersInitialState;
    default:
      return state;
  }
};

export default usersReducer;
