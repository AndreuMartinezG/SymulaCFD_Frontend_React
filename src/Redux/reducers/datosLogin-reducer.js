import { LOGIN, LOGOUT, MODIFY_CREDENTIALS } from '../types';

const initialState = {
    token: '',
    user: {}
};

const datosLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case LOGIN:
            return action.payload;

        //BORRAMOS DATOS GUARDADOS DE USUARIO LOGUEADO Y DEJAMOS VALORES VACIOS
        case LOGOUT:
            return initialState;


        //MODIFICAMOS LOS DATOS QUE TENEMOS GUARDADOS EN ESTE ESTADO CON LOS VALORES QUE METAMOS POR INPUT 
        case MODIFY_CREDENTIALS:
            return { ...state, user:  action.payload };

        default:
            return state
    }
}

export default datosLoginReducer;