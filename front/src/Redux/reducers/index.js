import counterReducer from "./conter";
import loggedReducer from "./islogged";
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})