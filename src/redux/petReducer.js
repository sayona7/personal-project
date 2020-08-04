import axios from 'axios';

const initialState = {
    pet: {},
    petsArray: []
}

// action type vars

const GET_PET = "GET_PET";
const ADD_PET = "ADD_PET";
const UPDATE_PET_ARR = "UPDATE_PET_ARR";

// const CLEAR_PET = "CLEAR_PET";


// action creators 

export function getPet(pet) {
    return {
        type: GET_PET,
        payload: pet
    }
}

export function addPet(petObj) {
    return {
        type: ADD_PET,
        payload: axios.post('/api/pet/add', petObj)
    }
}

export function updatePetArr(petArr) {
    return {
        type: UPDATE_PET_ARR,
        payload: petArr
    }
}


// reducer function

export default function petReducer(state = initialState, action) {
    const {type, payload} = action;

    // switch statement
    switch(type) {
        case GET_PET:
            console.log(payload);
            return {...state, pet: payload};
        case `${ADD_PET}_FULFILLED`:
            return {
                ...state,
                petsArray: payload.data
            }
        case UPDATE_PET_ARR:
            return {...state.array, payload};
        default:
            return state;
    }
}