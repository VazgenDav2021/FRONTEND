import { ADD_USERS, DELETE_USER } from './actionTypes';

export const addUser = (user) => {
    return {
        type: ADD_USERS,
        payload: user
    }
}

export const removeUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId
    }
}