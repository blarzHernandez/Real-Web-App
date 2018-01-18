import {  USER_LOGGED_IN } from "../types";
import api from "../api/api";

export const userLoggedIn = (user) => ({
    type:USER_LOGGED_IN,
    user
});

/**
 * 
 * @param {*} credentials 
 * We will have API request that will return promise and then we will get the data
 * from the request and we pass it along to the next action and dispatch a regular pure Redux
 * action that will change via reducers
 */
export const login = credentials => dispatch => api.user.login(credentials)
.then(user => dispatch(userLoggedIn(user)));