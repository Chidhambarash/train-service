import inputReducer from "./inputs";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    inputs: inputReducer,
})

export default allReducers;