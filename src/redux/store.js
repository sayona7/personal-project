import {createStore, combineReducers, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";
import petReducer from "./petReducer";

const rootReducer = combineReducers({
    reducer: reducer,
    petReducer: petReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));