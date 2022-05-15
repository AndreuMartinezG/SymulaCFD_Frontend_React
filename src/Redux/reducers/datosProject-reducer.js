import {PROJECT_DETAIL} from '../types';

const initialState = {
    project: {},
};

const busquedaProjectReducer = (state = initialState, action) => {
    switch(action.type){
        
        case PROJECT_DETAIL :
            return {...state, project: action.payload};

        default :
            return state
    }
}

export default busquedaProjectReducer;