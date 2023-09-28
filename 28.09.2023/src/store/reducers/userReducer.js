import { ADD_USERS, DELETE_USER } from "../action/actionTypes"

// начальное состояние приложения
const initialState = {
    users: [{
        name: "Antony",
        sname: "Tyson",
        age: 32,
        id: 3124312
    }],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(eachUser => eachUser.id !== action.payload)
            }
        default:
            return state;
    }
}