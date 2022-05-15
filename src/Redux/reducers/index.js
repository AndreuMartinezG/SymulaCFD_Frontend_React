import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';
import search from './datosProject-reducer';

const rootReducer = combineReducers({
    credentials,
    search
});


export default rootReducer;