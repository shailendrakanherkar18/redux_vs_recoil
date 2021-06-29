import { fetchUsersFailed, fetchUsersInitiated, fetchUsersSucceeded } from "./actions";
import { FETCH_USERS_URL } from "../../appConstants";

export const fetchUsers = (dispatch) => {
  dispatch(fetchUsersInitiated()); // turn on loader

  fetch(FETCH_USERS_URL)
    .then(response => response.json())
    // save data to reducer on success and turn off loader
    .then(data => dispatch(fetchUsersSucceeded(data)))
    // save error state over reducer on failure and turn off loader
    .catch(error => dispatch(fetchUsersFailed(error)))
};
