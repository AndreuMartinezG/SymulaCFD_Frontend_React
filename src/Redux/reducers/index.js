import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';

const rootReducer = combineReducers({
    credentials
});


export default rootReducer;