import { combineReducers } from 'redux';

import HomeReducer from './home/reducer';
import HomeReducerToolkit from "./home/slice"
const rootReducer = combineReducers({
    Home: HomeReducer,
    HomeToolkit: HomeReducerToolkit
});

export default rootReducer;
