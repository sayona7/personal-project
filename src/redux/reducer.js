const initialState = {
    user: {
        name: "Example",
        email: "",
        profile_pic: "https://via.placeholder.com/150"
    }
}

// action type variables

const GET_USER = "GET_USER";


// action creators

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}


// reducer function
export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    // switch statement
    switch(type) {
        case GET_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}