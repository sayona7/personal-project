import axios from "axios";

const initialState = {
    user: {
        name: null,
        email: null,
        profile_pic: "https://via.placeholder.com/150"
    }
}

// action type variables

const GET_USER = "GET_USER";

const REQUEST_USER = "REQUEST_USER";

const CLEAR_USER = "CLEAR_USER";


// action creators

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}

// export const requestUserData = () => {
//     let data = axios.get("/auth/user-data").then(res => res.data)
//     return {
//         type: REQUEST_USER,
//         payload: data
//     }
// }


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
        // case REQUEST_USER:
        //     const {email, name} = action.payload.data
        //     return {...state, user: email, name}
        case CLEAR_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}