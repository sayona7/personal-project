

const initialState = {
    user: {},
    profile: {}
}

// action type variables

const GET_USER = "GET_USER";

const CLEAR_USER = "CLEAR_USER";


// action creators

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}


export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

// reducer function
export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    // switch statement
    switch(type) {
        case GET_USER:
            return {...state, user: payload};
        case CLEAR_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}