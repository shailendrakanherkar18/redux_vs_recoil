import { selector, selectorFamily } from "recoil";

import { FETCH_USERS_URL } from '../../appConstants'

/** Listing page selector */
export const fetchUserDetails = selector({
  key: 'userDetailsSelector',
  get: async () => {
        const response = await fetch(FETCH_USERS_URL);
        const data = await response.json();
        return data;
  }
});

/** Details page selector */
export const getUserByID = selectorFamily({
  key: 'getUserByID',
  get: (userID) => ({get}) => {
    const users = get(fetchUserDetails)
    const selectedUser = users.data.find(user => user.id === Number(userID));
    return selectedUser;
  },
});