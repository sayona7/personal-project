
const initialState = {
    pet: {}
}

// action type vars

const GET_PET = "GET_PET";

// const CLEAR_PET = "CLEAR_PET";


// action creators 

export function getPet(pet) {
    return {
        type: GET_PET,
        payload: pet
    }
}


// reducer function

export default function petReducer(state = initialState, action) {
    const {type, payload} = action;

    // switch statement
    switch(type) {
        case GET_PET:
            return {...state, user: payload};
        default:
            return state;
    }
}