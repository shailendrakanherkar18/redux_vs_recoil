import { USERS_ACTION } from './constants';

export const fetchUsersInitiated = () => ({
  type: USERS_ACTION.fetchAction,
});

export const fetchUsersSucceeded = (data) => ({
  type: USERS_ACTION.successAction,
  payload: {
    ...data,
  }
});

export const fetchUsersFailed = (error) => ({
  type: USERS_ACTION.failureAction,
  payload: {
    error,
  }
});

export const resetUsersAction = () => ({
  type: USERS_ACTION.resetAction,
});