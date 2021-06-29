import { selector, selectorFamily } from "recoil";

const url = `https://reqres.in/api/users?pageSize=30`;

export const fetchUserDetails = selector({
  key: 'userDetailsSelector',
  get: async ({ get }) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
  }
});

export const getUserByID = selectorFamily({
  key: 'getUserByID',
  get: (userID) => ({get}) => {
    const users = get(fetchUserDetails)
    const selectedUser = users.data.find(user => user.id === Number(userID));
    return selectedUser || {};
  },
});