import { ERROR_FETCH, FETCH_POSTS, SUCCESS_FETCH } from "../action/types"

const initialState = {
    isLoading: false,
    hasError: false,
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, isLoading: true };
        case SUCCESS_FETCH:
            return { ...state, isLoading: false, posts: action.payload.data }
        case ERROR_FETCH:
            return { ...state, isLoading: false, hasError: true }
        default:
            return state;
    }
}