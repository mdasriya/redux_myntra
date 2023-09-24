import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    auth: false,
    token: ""
}


export const reducer = (state = initState, { type, payload }) => {
    switch (type) {

        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, token: payload, auth: true }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}